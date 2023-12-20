import {
  ShopinzenAnalyticsClient,
  TGetEventCountParams,
  TGetVisitsParams,
  TPeriod,
} from "@src/types";
import { GapiAnalyticsService } from "./analytics/gapi.analytics.service";
import { GapiInitializationParams } from "./types";
import { checkPeriod } from "@src/utils";

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

function getGA4DateFromPeriod(period: TPeriod) {
  checkPeriod(period);
  const { format, magicValue, value } = period;
  if (format === "magic") {
    return {
      startDate: magicValue + "daysAgo",
      endDate: "today",
    };
  }
  if (format === "date") {
    return {
      startDate: value.start,
      endDate: value.end || "today",
    };
  }
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
    this.checkProperty(property);
    let options = {
      dimensions: ["date"],
      metrics: [
        "sessions",
        "newUsers",
        "screenPageViews",
        "averageSessionDuration",
      ],
      ...getGA4DateFromPeriod(period),
      format,
    };

    return await this.gapiService.queryReport(property, options);
  }

  async getEventCount(data: TGetEventCountParams): Promise<any> {
    const { events, period, ga4: { property, format } = {} } = data;
    this.checkProperty(property);

    const metrics = convertEventToGA4Event(events);
    let options = {
      dimensions: [],
      metrics,
      ...getGA4DateFromPeriod(period),
      format,
    };

    return await this.gapiService
      .queryReport(property, options)
      .then((e: any) => {
        const totals = e?.metricsTotals || {};
        const result = {};
        for (let index = 0; index < metrics.length; index++) {
          const el = metrics[index];
          result[el] = totals[index];
        }
        return result;
      });
  }

  private checkProperty(property: string | undefined) {
    if (!property) {
      throw new Error("ga4ProppertyID is required");
    }
  }
}
