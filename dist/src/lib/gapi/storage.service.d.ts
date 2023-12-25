declare class CookiesStorage {
    storage: any;
    set(key: string, value: any, options?: {
        [key: string]: any;
    }): any;
    get(key: any): any;
}
declare class LocalStorageService {
    storage: CookiesStorage;
    localstorage: Storage;
    key_GoogleLoginResponse: string;
    setGoogleLoginResponse(data: any): void;
    getGoogleLoginResponse(): any;
    clearGoogleLoginResponse(): void;
}
declare const localStorageService: LocalStorageService;
export default localStorageService;
