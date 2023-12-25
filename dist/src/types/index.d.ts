export declare class ShopinzenAnalyticsClient {
    getVisitsPerPeriod(data: TGetVisitsParams): Promise<void>;
    getEventCount(data: TGetEventCountParams): Promise<void>;
}
export type TGetVisitsParams = {
    period: TPeriod;
    ga4?: {
        property: string;
        format?: string;
    };
};
export type TGetEventCountParams = {
    events: AnalyticsEvents[];
    period: TPeriod;
    ga4?: {
        property: string;
        format?: string;
    };
    matomo?: {
        [key: string]: any;
    };
};
export type AnalyticsEvents = {
    name: string;
    meta?: {
        ga4?: {
            conversion?: boolean;
            [key: string]: any;
        };
        matomo?: Record<string, any>;
    };
};
export type DateInterval = {
    from: string | null;
    to: string;
};
export type TPeriod = {
    format: "magic" | "date";
    magicValue: string | number;
    value: {
        start?: string;
        end?: string;
    };
};
