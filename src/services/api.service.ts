import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly http = inject(HttpClient);

  private buildParams(params?: Record<string, unknown>): HttpParams {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined) {
          httpParams = httpParams.set(key, String(params[key]));
        }
      });
    }
    return httpParams;
  }

  public get<TResponse>(endpoint: string, params?: Record<string, unknown>): Observable<TResponse> {
    return this.http.get<TResponse>(environment.baseUrl + endpoint, {
      params: this.buildParams(params),
    });
  }

  public post<TInput, TResponse>(endpoint: string, data: TInput): Observable<TResponse> {
    return this.http.post<TResponse>(environment.baseUrl + endpoint, data ?? {});
  }

  public postForm<TResponse>(endpoint: string, data: FormData): Observable<TResponse> {
    return this.http.post<TResponse>(environment.baseUrl + endpoint, data);
  }

  public put<TInput, TResponse>(endpoint: string, data: TInput, params?: Record<string, unknown>): Observable<TResponse> {
    return this.http.put<TResponse>(environment.baseUrl + endpoint, data, {
      params: this.buildParams(params),
    });
  }

  public delete<TResponse>(endpoint: string, id?: unknown): Observable<TResponse> {
    const url = environment.baseUrl + endpoint + (id !== undefined && id !== null ? String(id) : '');
    return this.http.delete<TResponse>(url);
  }

  public getBlob(endpoint: string, params?: Record<string, string | number>): Observable<Blob> {
    return this.http.get(environment.baseUrl + endpoint, {
      params: this.buildParams(params as Record<string, unknown>),
      responseType: 'blob',
    });
  }
}
