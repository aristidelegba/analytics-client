import {
  AnalyticsClientBaseClass,
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
export class MatomoClientFacade extends AnalyticsClientBaseClass {
  matomoClientCore!: MatomoClientCore;
  constructor(options: TMatomoConfig) {
    super();
    this.matomoClientCore = new MatomoClientCore(options);
  }

  async getEventCount(data: TGetEventCountParams): Promise<any> {
    const { events, period, matomo: {} = {} } = data;
    checkPeriod(period);
    const { OR } = matmoSegmentOperators;
    const { eventCategory } = EventsSegments;
    let segment = "segment=";
    for (let index = 0; index < events.length; index++) {
      const element = events[index];
      segment += `${eventCategory}==${element.name}${index < events.length ? OR : ""}`;
    }
    const params: MatomoMethodParams = {
      period: "day",
      date: getMaotomoDateFromPeriod(period),
      // segment
    };
    return new Promise(async(resolve, reject)=>{
      await this.matomoClientCore.getEventsCategory(params).then((response) => {
        const result = {};
        for (let index = 0; index < events.length; index++) {
         const key= events[index].name
          result[key] = response[key]?.nb_events || 0;
        }
        resolve(result)
      }).catch((err) => {
        reject(err)
      });
    })
  }
}
