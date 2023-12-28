import { GA4ClientFacade } from "./lib/gapi";
import { GapiInitializationParams } from "./lib/gapi/types";
import { MatomoClientFacade } from "./lib/matomo";
import { TMatomoConfig } from "./lib/matomo/types";
import {
  TGetEventCountParams,
  TGetVisitsParams,
} from "./types";


export * as localStorageService from "./lib/gapi/storage.service";
export { signInWithGoogle } from './lib/gapi/gapi.utils'


const clients = {
  matomo: MatomoClientFacade,
  ga4: GA4ClientFacade,
};
type ClientType = keyof typeof clients;

export class AnalyticsClient {
  clientType!: ClientType;
  private activeClient!: GA4ClientFacade | MatomoClientFacade;

  constructor() { }

  // ga4
  async initGA4(params: GapiInitializationParams) {
    this.clientType = "ga4";
    this.activeClient = new GA4ClientFacade(params);
    return await this.activeClient.gapiService.init()
  }
  get ga4Utils() {
    if (this.clientType !== 'ga4') {
      throw new Error(
        "ga4Utils isnt available as ga4 isnt the active client. Please make sure the active client is GA4"
      );
    }
    if (!this.activeClient) {
      throw new Error(
        "The active client is undefined, please run initGA4"
      );
    }

    return {
      listAccounts: (this.activeClient as GA4ClientFacade).listAccounts.bind(this.activeClient),
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



  public clone(): AnalyticsClient {
    const instance = new AnalyticsClient();
    const actualThis = this
    Object.keys(actualThis).map(e => {
      instance[e] = actualThis[e]
    })
    return instance
  }
}


