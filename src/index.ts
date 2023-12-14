import { GA4ClientFacade } from "./features/gapi"
import { MatomoClientFacade } from "./features/matomo"
import { DateInterval, AnalyticsEvents, TGetEventCountParams } from "./types"


const clients = {
    matomo: MatomoClientFacade,
    ga4: GA4ClientFacade,
}
type ClientType = keyof typeof clients

export class ShopinzenAnalytics {
    clientType!: ClientType
    activeClient!: GA4ClientFacade | MatomoClientFacade

    constructor({ client }: { client: ClientType }) {
        this.clientType = client
        this.activeClient = new clients[client]
    }

    getVisitsPerPeriod(period: DateInterval) {

    }

    async getEventCount(params: TGetEventCountParams) {
        return await this.activeClient.getEventCount(params)
    }
}