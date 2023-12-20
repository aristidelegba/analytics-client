import {
  ShopinzenAnalyticsClient,
  TGetEventCountParams,
  TPeriod,
} from "@src/types";
import { MatomoMethodParams, TMatomoConfig } from "./types";
import MatomoClientCore from "./api/core";
import { checkPeriod } from "@src/utils";
export * from "@src/types";
function getMaotomoDateFromPeriod(period: TPeriod) {
  checkPeriod(period);
  const { format, type, magicValue, value } = period;
  if (format === "magic") {
    return magicValue + "last" + type;
  }
  //   if (format === "date") {
  return `${value.start},${value.end}`;
  //   }
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
    const params: MatomoMethodParams = {
      period: period.type,
      date: getMaotomoDateFromPeriod(period),
    };
    return await this.matomoClientCore.getEventsName(params);
  }
}
