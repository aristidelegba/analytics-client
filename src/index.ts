import { GA4ClientFacade } from "./lib/gapi";
import { GapiInitializationParams } from "./lib/gapi/types";
import { MatomoClientFacade } from "./lib/matomo";
import { TMatomoConfig } from "./lib/matomo/types";
import {
  DateInterval,
  AnalyticsEvents,
  TGetEventCountParams,
  TGetVisitsParams,
} from "./types";

const clients = {
  matomo: MatomoClientFacade,
  ga4: GA4ClientFacade,
};
type ClientType = keyof typeof clients;

export class ShopinzenAnalytics {
  clientType!: ClientType;
  private activeClient!: GA4ClientFacade | MatomoClientFacade;

  constructor() { }

  // ga4
  initGA4(params: GapiInitializationParams) {
    this.clientType = "ga4";
    this.activeClient = new GA4ClientFacade(params);
  }
  get ga4Utils() {
    return {
      listAccounts: (this.activeClient as GA4ClientFacade).listAccounts,
      isInitializing: (this.activeClient as GA4ClientFacade).gapiService.initializationPending,
      service: (this.activeClient as GA4ClientFacade).gapiService
    };
  }

  // Matomo
  initMatomo(params: TMatomoConfig) {
    this.clientType = "matomo";
    this.activeClient = new MatomoClientFacade(params);
  }

  // common
  async getVisitsPerPeriod(params: TGetVisitsParams) {
    this.checkIfReady();
    return await this.activeClient.getVisitsPerPeriod(params);
  }

  async getEventCount(params: TGetEventCountParams) {
    this.checkIfReady();
    return await this.activeClient.getEventCount(params);
  }

  checkIfReady() {
    if (!this.activeClient) {
      throw new Error("Client isnt set.");
    }
  }



  public clone(): ShopinzenAnalytics {
    const instance = new ShopinzenAnalytics();
    const actualThis = this
    Object.keys(actualThis).map(e => {
      instance[e] = actualThis[e]
    })
    return instance
  }
}
