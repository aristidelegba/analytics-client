import axios from "axios";
import {
  MatomoAPIResponse,
  MatomoMethod,
  MatomoMethodParams,
  TMatomoConfig,
} from "../types";
import { EventsMethods } from "./events/event";
import { mergeEventsPerCategories } from "./events/helpers";

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

        const response = await axios.get(baseUrl, { params: queryParams });
        return response.data;
      } catch (error) {
        console.error("Error making Matomo API request:", error);
        throw error;
      }
    };
  }

  async getEventsCategory(
    params: MatomoMethodParams
  ): Promise<MatomoAPIResponse> {
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

  private async manualArchiving() {
    console.log("this.matomoConfigs", this.matomoConfigs);
    return await axios.post(
      this.matomoConfigs.baseUrl + "/misc/cron/archive.php",
      { token_auth: this.matomoConfigs.tokenAuth }
    );
  }
}
