import {
  ShopinzenAnalyticsClient,
  TGetEventCountParams,
  TPeriod,
} from "@src/types";
import { MatomoMethodParams, TMatomoConfig } from "./types";
import MatomoClientCore, { matmoSegmentOperators } from "./api/core";
import { checkPeriod } from "@src/utils";
import { EventsSegments } from "./api/events/event";
export * from "@src/types";
function getMaotomoDateFromPeriod(period: TPeriod) {
  checkPeriod(period);
  const { format, magicValue, value } = period;
  if (format === "magic") {
    return "last" + magicValue;
  }
  return `${value.start}${value.end ? "," : ""}${value.end}`;
}
export class MatomoClientFacade extends ShopinzenAnalyticsClient {
  matomoClientCore!: MatomoClientCore;
  constructor(options: TMatomoConfig) {
    super();
    this.matomoClientCore = new MatomoClientCore(options);
  }

  async getEventCount(data: TGetEventCountParams): Promise<any> {
    const { events, period, matomo: {} = {} } = data;
    checkPeriod(period);
    const { OR } = matmoSegmentOperators;
    const { eventName } = EventsSegments;
    let segment = "segment=";
    for (let index = 0; index < events.length; index++) {
      const element = events[index];
      segment += `${eventName}=${element.name}${index < events.length ? OR : ""}`;
    }
    const params: MatomoMethodParams = {
      period: "day",
      date: getMaotomoDateFromPeriod(period),
      segment
    };
    return await this.matomoClientCore.getEventsName(params);
  }
}
