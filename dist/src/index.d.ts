import { GA4ClientFacade } from "./lib/gapi";
import { GapiInitializationParams } from "./lib/gapi/types";
import { MatomoClientFacade } from "./lib/matomo";
import { TMatomoConfig } from "./lib/matomo/types";
import { TGetEventCountParams, TGetVisitsParams } from "./types";
export * as localStorageService from "./lib/gapi/storage.service";
export { signInWithGoogle } from './lib/gapi/gapi.utils';
declare const clients: {
    matomo: typeof MatomoClientFacade;
    ga4: typeof GA4ClientFacade;
};
type ClientType = keyof typeof clients;
export declare class AnalyticsClient {
    clientType: ClientType;
    private activeClient;
    constructor();
    initGA4(params: GapiInitializationParams): Promise<unknown>;
    get ga4Utils(): {
        listAccounts: () => Promise<any>;
        isInitializing: boolean;
        service: import("./lib/gapi/analytics/gapi.analytics.service").GapiAnalyticsService;
    };
    initMatomo(params: TMatomoConfig): void;
    getVisitsPerPeriod(params: TGetVisitsParams): Promise<any>;
    getEventCount(params: TGetEventCountParams): Promise<any>;
    checkIfReady(): void;
    clone(): AnalyticsClient;
}
