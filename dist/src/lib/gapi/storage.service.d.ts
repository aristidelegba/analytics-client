declare class CookiesStorage {
    storage: any;
    set(key: string, value: any, options?: {
        [key: string]: any;
    }): any;
    get(key: any): any;
    remove(key: any): void;
}
declare class LocalStorageService {
    storage: CookiesStorage;
    key_GoogleLoginResponse: string;
    setGoogleLoginResponse(data: any): void;
    getGoogleLoginResponse(): any;
    clearGoogleLoginResponse(): void;
}
declare const localStorageService: LocalStorageService;
export default localStorageService;
