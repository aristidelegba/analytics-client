import {
  AnalyticsClientBaseClass,
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

export class GA4ClientFacade extends AnalyticsClientBaseClass {
  gapiService!: GapiAnalyticsService;
  initialisationsParams!: GapiInitializationParams;

  constructor(options: GapiInitializationParams) {
    super();
    this.initialisationsParams = options
    this.gapiService = new GapiAnalyticsService(options);
  }

  async listAccounts() {
    if (!this.gapiService) {
      throw new Error(
        "GA4 client isn't initialized correctly. Please make sure the active client is GA4"
      );
    }
    if (!this.gapiService.gapiIsScriptAreAllDownloaded) {
      throw new Error(
        "Gapi script are still loading. PLease retry."
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
        console.log('totals', totals, metrics)
        const result = {};
        for (let index = 0; index < metrics.length; index++) {
          const el = events.map(e=>e.name)[index];
          result[el] = totals[metrics[index]];
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
