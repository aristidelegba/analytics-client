import { AnalyticsClientBaseClass, TGetEventCountParams, TGetVisitsParams } from "@src/types";
import { TMatomoConfig } from "./types";
import MatomoClientCore from "./api/core";
export * from "@src/types";
export declare class MatomoClientFacade extends AnalyticsClientBaseClass {
    matomoClientCore: MatomoClientCore;
    constructor(options: TMatomoConfig);
    getEventCount(data: TGetEventCountParams): Promise<any>;
    getVisitsPerPeriod(data: TGetVisitsParams): Promise<any>;
}
