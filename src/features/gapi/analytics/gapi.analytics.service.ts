/* eslint-disable no-unused-vars */
import localStorageService from "../localstorage.service";
import { parseReportAsChartData, serverUrl } from "../gapi.utils";
import { GapiInitializationParams } from "../types";
import axios from "axios";

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
  isLoadingGAPI = false;
  initializationPending = false;

  initialisationsParams!: GapiInitializationParams
  constructor(options: GapiInitializationParams) {
    const {
      clientId,
      authScopes,
      shopinzenAnalyticsAdminEmail
    } = options;
    this.initialisationsParams = options

    this.init();
  }

  async refreshAccessToken(email: string) {
    const headers = { Accept: "application/json" };

    const serverResponse = await axios.post(
      serverUrl + "/google/auth/refresh-access-token",
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
          localStorageService.getGoogleLoginResponse() || {};
        console.log("refresh_token", refresh_token);
        // if (!refresh_token) reject(error);
        const { data: credentials } = await this.refreshAccessToken(this.initialisationsParams.shopinzenAnalyticsAdminEmail).catch(reject) as { data: any };
        console.log("credentials :>> ", credentials);
        if (!credentials) reject(error);

        localStorageService.setGoogleLoginResponse(credentials);
        this.setAccessToken();
        const { method, args } = context;
        console.log("method, args :>> ", method, args);
        resolve(this[method](...args));
      }

      reject(error);
    });
  }

  async init() {
    this.isLoadingGAPI = window?.isLoadingGAPI;
    return new Promise(async (resolve, reject) => {
      if (window?.isLoadingGAPI) {
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
    if (!property) throw new Error("No property set");

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

      if (options.format === "chart_data") {
        return parseReportAsChartData([reports]);
      }

      //   return reports;
    } catch (error) {
      return await this.errorHandler(error, {
        method: "queryReport",
        args: arguments,
      });
      //   console.log("res", res);
      //   throw res;
    }
  }
  async runRealtimeReport(property, options) {
    if (!property) throw new Error("No property set");

    try {
      let { dimensions, metrics, startDate, endDate } = options;
      metrics = (metrics || []).map((e) => {
        return typeof e === "string" ? { name: e } : e;
      });
      dimensions = (dimensions || []).map((e) => {
        return typeof e === "string" ? { name: e } : e;
      });
      console.log("this.analyticsdata :>> ", this.analyticsdata);
      const meta = await this.analyticsdata.properties.getMetadata({
        name: property + "/metadata",
      });
      console.log("meta", meta);
      const reports = await this.analyticsdata.properties
        .runRealtimeReport({
          property: property,
          dimensions: dimensions,
          metrics: metrics,
        })
        .then((e) => {
          return e;
        });
      console.log("reports realtime :>> ", reports);
      //   if (options.format === "chart_data") {
      //     return parseReportAsChartData([reports]);
      //   }

      //   return reports;
    } catch (error) {
      return await this.errorHandler(error, {
        method: "runRealtimeReport",
        args: arguments,
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
          args: arguments,
        });
        console.log("res", res);
        return res;
      });
  }

  setAccessToken() {
    const { access_token } = localStorageService.getGoogleLoginResponse() || {};
    this.gapi.client.setToken({
      access_token: access_token,
    });
    this.gapi.auth.setToken({
      access_token: access_token,
    });
  }
}

// async runReport(view, options) {
//     let { dimensions, metrics, startDate, endDate } = options;

//     let filters = {
//       metrics: (options.metrics || []).map((e) => {
//         return "ga:" + e;
//       }),
//       dimensions: (options.dimensions || []).map((e) => {
//         return "ga:" + e;
//       }),
//     };
//     const ids = "ga:" + view.id;
//     console.log("filters", JSON.parse(JSON.stringify(filters)));

//     const buildFilters = (data) => {
//       return data;
//     };
//     const { result } = await this.analytics.data.ga.get({
//       ...filters,
//       "start-date": startDate,
//       "end-date": endDate,
//       ids: ids,
//     });

//     console.log("result :>> ", result);
//     return result;
//   }
