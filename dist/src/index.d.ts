import { GA4ClientFacade } from "./lib/gapi";
export { signInWithGoogle } from "./lib/gapi/gapi.utils";
import { GapiInitializationParams } from "./lib/gapi/types";
import { MatomoClientFacade } from "./lib/matomo";
import { TMatomoConfig } from "./lib/matomo/types";
import { TGetEventCountParams, TGetVisitsParams } from "./types";
declare const clients: {
    matomo: typeof MatomoClientFacade;
    ga4: typeof GA4ClientFacade;
};
type ClientType = keyof typeof clients;
export declare class ShopinzenAnalytics {
    clientType: ClientType;
    private activeClient;
    constructor();
    initGA4(params: GapiInitializationParams): void;
    get ga4Utils(): {
        listAccounts: () => Promise<any>;
        isInitializing: boolean;
        service: import("./lib/gapi/analytics/gapi.analytics.service").GapiAnalyticsService;
    };
    initMatomo(params: TMatomoConfig): void;
    getVisitsPerPeriod(params: TGetVisitsParams): Promise<any>;
    getEventCount(params: TGetEventCountParams): Promise<any>;
    checkIfReady(): void;
    clone(): ShopinzenAnalytics;
}
