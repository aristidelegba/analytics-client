import { Period } from "@src/lib/matomo/types";

export class ShopinzenAnalyticsClient {
  async getVisitsPerPeriod(data: TGetVisitsParams) {}

  async getEventCount(data: TGetEventCountParams) {}
}

export type TGetVisitsParams = {
  period: TPeriod;
  ga4?: { property: string; format?: string };
};
export type TGetEventCountParams = {
  events: AnalyticsEvents[];
  period: TPeriod;
  ga4?: { property: string; format?: string };
};

export type AnalyticsEventsName = "Click_OpenChat";
("Click_CloseChat");
("Click_SmartCard");
export type AnalyticsEvents = {
  name: AnalyticsEventsName;
  meta?: {
    ga4?: {
      conversion?: boolean;
      [key: string]: any;
    };
    matomo?: Record<string, any>;
  };
};

export type DateInterval = {
  from: string | null;
  to: string;
};

export type TPeriod = {
  //   type: "litteral" | "date";
  //   period: Period;
  //   date: DateInterval;
  start: string;
  end?: string;
};
