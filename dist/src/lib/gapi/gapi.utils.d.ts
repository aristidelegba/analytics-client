export declare const signInWithGoogle: ({ requestCode, clientId, scope, accessTokenServerUrl }: {
    clientId: string;
    scope: string[];
    requestCode: boolean;
    accessTokenServerUrl: string;
}) => Promise<unknown> | undefined;
declare function getAccessTokenFromServer({ code, serverUrl }: {
    code: any;
    serverUrl: any;
}): Promise<{
    data: any;
}>;
export declare function parseReportAsChartData(reports: any): {
    dimensions: any;
    metricsTotals: any;
};
export declare function gaDateToJSDate(date: any, configs?: {
    toLocaleDateString: null;
}): any;
declare const _default: {
    signInWithGoogle: ({ requestCode, clientId, scope, accessTokenServerUrl }: {
        clientId: string;
        scope: string[];
        requestCode: boolean;
        accessTokenServerUrl: string;
    }) => Promise<unknown> | undefined;
    getAccessTokenFromServer: typeof getAccessTokenFromServer;
    parseReportAsChartData: typeof parseReportAsChartData;
    gaDateToJSDate: typeof gaDateToJSDate;
};
export default _default;
