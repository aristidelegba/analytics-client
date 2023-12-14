import { Period } from "@src/features/matomo/types"



export class ShopinzenAnalyticsClient{

   async getVisitsPerPeriod(period: TPeriod) {

    }

   async getEventCount(data: TGetEventCountParams){

    }
}




export type TGetEventCountParams = {event: AnalyticsEvents, period?:TPeriod}

export type AnalyticsEvents = 'Click_OpenChat' | 'Click_CloseChat' | 'Click_SmartCard'


export type DateInterval = {
    from: string | null,
    to: string
}

export type TPeriod = {
    type: 'litteral' | 'date',
    period: Period,
    date: DateInterval
}