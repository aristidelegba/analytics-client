import {
  DateInterval,
  ShopinzenAnalyticsClient,
  TGetEventCountParams,
  TGetVisitsParams,
  TPeriod,
} from "@src/types";
import { GapiAnalyticsService } from "./analytics/gapi.analytics.service";
import { GapiInitializationParams } from "./types";

function convertEventToGA4Event(events: TGetEventCountParams["events"]) {
  const ga4Event = events.map((ev) => {
    const { name, meta: { ga4 } = {} } = ev;
    if (ga4) {
      if (ga4.conversion) return `conversions:${name}`;
    }
    return name;
  });

  return ga4Event;
}
export class GA4ClientFacade extends ShopinzenAnalyticsClient {
  public readonly gapiService: GapiAnalyticsService;
  constructor(options: GapiInitializationParams) {
    super();
    this.gapiService = new GapiAnalyticsService(options);
  }

  async listAccounts() {
    if (!this.gapiService.analyticsadmin) {
      throw new Error(
        "GA4 client isn't initialized correctly. Please make sure the active client is GA4"
      );
    }
    return await this.gapiService.listAccounts();
  }

  async getVisitsPerPeriod(data: TGetVisitsParams): Promise<any> {
    const { period, ga4: { property, format } = {} } = data;
    if (!property) {
      throw new Error("ga4ProppertyID is required");
    }
    let options = {
      dimensions: ["date"],
      metrics: ["screenPageViews"],
      startDate: period?.start,
      endDate: period.end,
      format,
    };

    return await this.gapiService.queryReport(property, options);
  }
  async getEventCount(data: TGetEventCountParams): Promise<any> {
    const { events, period, ga4: { property, format } = {} } = data;
    if (!property) {
      throw new Error("ga4ProppertyID is required");
    }
    let options = {
      dimensions: [],
      metrics: convertEventToGA4Event(events),
      startDate: period?.start,
      endDate: period.end,
      format,
    };

    return await this.gapiService.queryReport(property, options);
  }
}

export * from "./react";
// export * as default from "./gapi.utils";
export * from ".";
