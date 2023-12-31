/* eslint-disable no-unused-vars */
import storageService from "../storage.service";
import { parseReportAsChartData } from "../gapi.utils";
import { GapiInitializationParams } from "../types";
import axios from "axios";
import httpClient from "@src/deps/http-client";

export class GapiAnalyticsService {
  gapi;
  analytics;
  realtimeAPI;
  analyticsdata;
  analyticsadmin;
  management;
  webproperties;
  accounts;
  profiles;
  initializationPending = true;

  initialisationsParams!: GapiInitializationParams;
  constructor(options: GapiInitializationParams) {
    const { clientId, authScopes, GA4AdminEmail } = options;
    this.initialisationsParams = options;
  }

  async refreshAccessToken(email: string) {
    const headers = { Accept: "application/json" };

    const serverResponse = await httpClient.post(
      this.initialisationsParams.serverUrls.refreshToken,
      { email },
      { headers }
    );
    return serverResponse;
  }

  async errorHandler(error, context) {
    return new Promise(async (resolve, reject) => {
      //   console.log("error :>> ", error, context);
      const { status, result } = error;
      if (status === 401) {
        const { refresh_token } =
          storageService.getGoogleLoginResponse() || {};
        console.log("refresh_token", refresh_token);
        // if (!refresh_token) reject(error);
        const { data: credentials } = (await this.refreshAccessToken(
          this.initialisationsParams.GA4AdminEmail
        ).catch(reject)) as { data: any };
        console.log("credentials :>> ", credentials);
        if (!credentials) reject(error);

        storageService.setGoogleLoginResponse(credentials);
        this.setAccessToken();
        const { method, args } = context;
        console.log("method, args :>> ", method, args);
        resolve(this[method](...args));
      }

      reject(error);
    });
  }

  get gapiIsScriptAreAllDownloaded() {
    const gapi = window?.gapi;
    const analytics = gapi?.client?.analytics;
    const analyticsdata = gapi?.client?.analyticsdata;
    const analyticsadmin = gapi?.client?.analyticsadmin;
    const areNotLoaded = !gapi || !analytics || !analyticsadmin || !analyticsdata
    return !areNotLoaded
  }
  async init() {
    return new Promise(async (resolve, reject) => {
      if (!this.gapiIsScriptAreAllDownloaded) {
        setTimeout(async () => {
          resolve(await this.init());
        }, 1000);
      } else {
        this.gapi = window?.gapi;
        this.analytics = this.gapi.client.analytics;
        this.realtimeAPI = this.gapi.client.analytics.data.realtime;
        this.analyticsdata = this.gapi.client.analyticsdata;
        this.analyticsadmin = this.gapi.client.analyticsadmin;

        this.management = this.gapi.client.analytics.management;
        this.accounts = this.management.accounts;
        this.webproperties = this.management.webproperties;
        this.profiles = this.management.profiles;

        this.setAccessToken();

        this.initializationPending = false;
        resolve(true);
      }
    });
  }

  async queryReport(property, options) {
    console.log("property", property);
    if (!property) throw new Error("Google property isnt set");

    try {
      let { dimensions, metrics, startDate, endDate } = options;
      metrics = (metrics || []).map((e) => {
        // return { name: "ga:" + e };
        return typeof e === "string" ? { name: e } : e;
      });
      dimensions = (dimensions || []).map((e) => {
        return typeof e === "string" ? { name: e } : e;
      });

      const reports = await this.analyticsdata.properties
        .runReport({
          property,
          dateRanges: [
            {
              startDate: startDate,
              endDate: endDate,
            },
          ],
          metrics: metrics,
          dimensions: dimensions,
          metricAggregations: ["TOTAL"],
        })
        .then((e) => {
          return e;
        });

      // if (options.format === "chart_data") {
      return parseReportAsChartData([reports]);
      // }

      // return reports;
    } catch (error) {
      return await this.errorHandler(error, {
        method: "queryReport",
        args: [property, options],
      });
      //   console.log("res", res);
      //   throw res;
    }
  }

  async listAccounts() {
    console.log(" this.analyticsadmin", this.analyticsadmin);
    return await this.analyticsadmin.accountSummaries
      .list()
      .then((e) => e.result.accountSummaries)
      .catch(async (e) => {
        const res = await this.errorHandler(e, {
          method: "listAccounts",
          args: [],
        });
        console.log("res", res);
        return res;
      });
  }

  setAccessToken() {
    const { access_token } = storageService.getGoogleLoginResponse() || {};
    this.gapi.client.setToken({
      access_token: access_token,
    });
    this.gapi.auth.setToken({
      access_token: access_token,
    });
  }
}
