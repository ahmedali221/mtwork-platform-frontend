import {
  HttpClient,
  HttpParams
} from "./chunk-ABR2YXBL.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-MQLQGMUZ.js";

// src/environment.ts
var environment = {
  production: false,
  baseUrl: "https://api.mtwork.com/api/"
};

// src/services/api.service.ts
var _ApiService = class _ApiService {
  constructor() {
    this.http = inject(HttpClient);
  }
  buildParams(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0) {
          httpParams = httpParams.set(key, String(params[key]));
        }
      });
    }
    return httpParams;
  }
  get(endpoint, params) {
    return this.http.get(environment.baseUrl + endpoint, {
      params: this.buildParams(params)
    });
  }
  post(endpoint, data) {
    return this.http.post(environment.baseUrl + endpoint, data ?? {});
  }
  postForm(endpoint, data) {
    return this.http.post(environment.baseUrl + endpoint, data);
  }
  put(endpoint, data, params) {
    return this.http.put(environment.baseUrl + endpoint, data, {
      params: this.buildParams(params)
    });
  }
  delete(endpoint, id) {
    const url = environment.baseUrl + endpoint + (id !== void 0 && id !== null ? String(id) : "");
    return this.http.delete(url);
  }
  getBlob(endpoint, params) {
    return this.http.get(environment.baseUrl + endpoint, {
      params: this.buildParams(params),
      responseType: "blob"
    });
  }
};
_ApiService.\u0275fac = function ApiService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ApiService)();
};
_ApiService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApiService, factory: _ApiService.\u0275fac, providedIn: "root" });
var ApiService = _ApiService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApiService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  environment,
  ApiService
};
//# sourceMappingURL=chunk-RDBMT5X2.js.map
