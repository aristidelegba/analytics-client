import {
  EventCategory,
  MatomoAPIResponse,
  MatomoMethod,
  MatomoMethodParams,
  TMatomoConfig,
} from "../types";
import { EventsMethods } from "./events/event";
import { mergeEventsPerCategories } from "./events/helpers";
import httpClient from "@src/deps/http-client";
import { VisitSummaryMethods } from "./visits/visitsSummary";

export const matmoSegmentOperators = {
  OR: ",",
  AND: ";",
};
export default class MatomoClientCore {
  matomoConfigs!: TMatomoConfig;
  constructor(data: TMatomoConfig) {
    this.initConfig(data);
  }

  private initConfig(data: TMatomoConfig) {
    console.log("data", data);
    this.matomoConfigs = data;
  }

  createMatomoAPIRequest(method: string): MatomoMethod {
    return async (params: MatomoMethodParams) => {
      try {
        if (!this.matomoConfigs)
          throw new Error("Please set matomo configs and retry");
        const baseUrl = this.matomoConfigs.baseUrl;
        const queryParams = {
          module: "API",
          method,
          idSite: this.matomoConfigs.idSite,
          token_auth: this.matomoConfigs.tokenAuth,
          format: "json",
          ...params,
        };

        const response = await httpClient.get(baseUrl, { params: queryParams });
        if (response?.data?.result === "error") throw { ...response?.data };
        return response.data;
      } catch (error) {
        console.error("Error making Matomo API request:", error);
        throw error;
      }
    };
  }

  async getEventsCategory(
    params: MatomoMethodParams
  ): Promise<Record<string, EventCategory>> {
    const request = this.createMatomoAPIRequest(EventsMethods.getCategory);
    const result = await request(params);
    return mergeEventsPerCategories(result);
  }
  async getEventsAction(
    params: MatomoMethodParams
  ): Promise<MatomoAPIResponse> {
    const request = this.createMatomoAPIRequest(EventsMethods.getAction);
    const result = await request(params);
    return mergeEventsPerCategories(result);
  }
  async getEventsName(params: MatomoMethodParams): Promise<MatomoAPIResponse> {
    const request = this.createMatomoAPIRequest(EventsMethods.getName);
    const result = await request(params);
    return mergeEventsPerCategories(result);
  }



  async getVisitsSummary(
    params: MatomoMethodParams
  ): Promise<Record<string, any>[]> {
    const request = this.createMatomoAPIRequest(VisitSummaryMethods.getVisitSummary);
    const result = await request(params);
    const data = Object.entries(result).map(([date, values]) => ({
      name: date,
      // nb_visits: values.nb_visits || 0,
      // nb_uniq_visitors: values.nb_uniq_visitors || 0
      activeUsers: values.nb_visits || 0,
      // bounce_count
      // bounce_rate
      // max_actions
      // nb_actions
      // nb_actions_per_visit
      // nb_uniq_visitors
      // nb_users
      // nb_visits
      // nb_visits_converted
      // sum_visit_length
      // ...values,
    }));
    return data
    // return result
  }

}
