import { ShopinzenAnalyticsClient, TGetEventCountParams } from "@src/types";
import { TMatomoConfig } from "./types";
import MatomoClientCore from "./api/core";
export * from "@src/types";
export declare class MatomoClientFacade extends ShopinzenAnalyticsClient {
    matomoClientCore: MatomoClientCore;
    constructor(options: TMatomoConfig);
    getEventCount(data: TGetEventCountParams): Promise<any>;
}
