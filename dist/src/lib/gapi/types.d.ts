export type GapiInitializationParams = {
    clientId: string;
    authScopes: string[];
    GA4AdminEmail: string;
    serverUrls: {
        getAccessToken: string;
        refreshToken: string;
    };
};
