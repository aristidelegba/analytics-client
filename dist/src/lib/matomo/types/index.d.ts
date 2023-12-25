export type TMatomoConfig = {
    baseUrl: string;
    idSite: number;
    tokenAuth: string;
};
export interface EventCategory {
    nb_visits: number;
    nb_events: number;
    [key: string]: any;
}
export type Period = "day" | "week" | "month" | "year";
type DateString = string;
export type MatomoAPIResponse = {
    [key: string]: any;
};
export type MatomoMethodParams = {
    period: Period;
    date: DateString;
    segment?: string;
    [key: string]: any;
};
export type MatomoMethod = (params: MatomoMethodParams) => Promise<MatomoAPIResponse>;
export {};
