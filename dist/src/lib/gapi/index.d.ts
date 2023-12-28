import { AnalyticsClientBaseClass, TGetEventCountParams, TGetVisitsParams } from "@src/types";
import { GapiAnalyticsService } from "./analytics/gapi.analytics.service";
import { GapiInitializationParams } from "./types";
export declare class GA4ClientFacade extends AnalyticsClientBaseClass {
    gapiService: GapiAnalyticsService;
    initialisationsParams: GapiInitializationParams;
    constructor(options: GapiInitializationParams);
    listAccounts(): Promise<any>;
    getVisitsPerPeriod(data: TGetVisitsParams): Promise<any>;
    getEventCount(data: TGetEventCountParams): Promise<any>;
    private checkProperty;
}
