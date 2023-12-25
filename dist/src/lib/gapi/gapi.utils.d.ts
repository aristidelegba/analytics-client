export declare const serverUrl: string;
export declare const signInWithGoogle: ({ requestCode, clientId, scope, }: {
    clientId: string;
    scope: string[];
    requestCode: boolean;
}) => Promise<unknown> | undefined;
declare function getAccessTokenFromServer({ code }: {
    code: any;
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
    serverUrl: string;
    signInWithGoogle: ({ requestCode, clientId, scope, }: {
        clientId: string;
        scope: string[];
        requestCode: boolean;
    }) => Promise<unknown> | undefined;
    getAccessTokenFromServer: typeof getAccessTokenFromServer;
    parseReportAsChartData: typeof parseReportAsChartData;
    gaDateToJSDate: typeof gaDateToJSDate;
};
export default _default;
