import cookies from "js-cookie";
class LocalStorage {
  storage: any = window.localStorage;

  set(key: string, value: any, options?: { [key: string]: any }) {
    value = options && options.isObject ? JSON.stringify(value) : value;
    return this.storage.setItem(key, value);
  }
  get(key: string) {
    try {
      return JSON.parse(this.storage.getItem(key));
    } catch (error) {
      return this.storage.getItem(key);
    }
  }
}
class CookiesStorage {
  storage = cookies;

  set(key: string, value: any, options?: { [key: string]: any }) {
    value = options && options.isObject ? JSON.stringify(value) : value;
    return this.storage.set(key, value);
  }
  get(key) {
    try {
      return JSON.parse(this.storage.get(key));
    } catch (error) {
      return this.storage.get(key);
    }
  }
}
class LocalStorageService {
  // storage = new LocalStorage();
  storage = new CookiesStorage();
  localstorage = window.localStorage;

  // keys
  key_GoogleLoginResponse: string = "key_GoogleLoginResponse";

  setGoogleLoginResponse(data) {
    this.storage.set(this.key_GoogleLoginResponse, JSON.stringify(data));
  }

  getGoogleLoginResponse() {
    return this.storage.get(this.key_GoogleLoginResponse);
  }
  clearGoogleLoginResponse() {
    return this.localstorage.removeItem(this.key_GoogleLoginResponse);
  }
}

const localStorageService = new LocalStorageService();

export default localStorageService;
