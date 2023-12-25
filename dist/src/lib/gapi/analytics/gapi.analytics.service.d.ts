import { GapiInitializationParams } from "../types";
export declare class GapiAnalyticsService {
    gapi: any;
    analytics: any;
    realtimeAPI: any;
    analyticsdata: any;
    analyticsadmin: any;
    management: any;
    webproperties: any;
    accounts: any;
    profiles: any;
    initializationPending: boolean;
    initialisationsParams: GapiInitializationParams;
    constructor(options: GapiInitializationParams);
    refreshAccessToken(email: string): Promise<any>;
    errorHandler(error: any, context: any): Promise<unknown>;
    get gapiIsScriptAreAllDownloaded(): boolean;
    init(): Promise<unknown>;
    queryReport(property: any, options: any): Promise<unknown>;
    listAccounts(): Promise<any>;
    setAccessToken(): void;
}
