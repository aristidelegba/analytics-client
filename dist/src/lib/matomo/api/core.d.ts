import { EventCategory, MatomoAPIResponse, MatomoMethod, MatomoMethodParams, TMatomoConfig } from "../types";
export declare const matmoSegmentOperators: {
    OR: string;
    AND: string;
};
export default class MatomoClientCore {
    matomoConfigs: TMatomoConfig;
    constructor(data: TMatomoConfig);
    private initConfig;
    createMatomoAPIRequest(method: string): MatomoMethod;
    getEventsCategory(params: MatomoMethodParams): Promise<Record<string, EventCategory>>;
    getEventsAction(params: MatomoMethodParams): Promise<MatomoAPIResponse>;
    getEventsName(params: MatomoMethodParams): Promise<MatomoAPIResponse>;
    getVisitsSummary(params: MatomoMethodParams): Promise<Record<string, any>[]>;
}
