import { GA4ClientFacade } from "./lib/gapi";
import { GapiInitializationParams } from "./lib/gapi/types";
import { MatomoClientFacade } from "./lib/matomo";
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
  activeClient!: GA4ClientFacade | MatomoClientFacade;

  constructor({ client }: { client: ClientType }) {
    this.clientType = client;
  }

  initGA4(params: GapiInitializationParams) {
    this.clientType = "ga4";
    this.activeClient = new GA4ClientFacade(params);
  }
  async listGA4Accounts() {
    return await (this.activeClient as GA4ClientFacade).listAccounts();
  }

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
}
