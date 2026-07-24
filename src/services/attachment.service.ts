import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiService } from './api.service';
import { environment } from '../environment';

export interface UploadResponse {
  filePath: string;
  fileName?: string;
}

@Injectable({ providedIn: 'root' })
export class AttachmentService {
  private readonly apiService = inject(ApiService);
  private readonly http       = inject(HttpClient);

  /**
   * POST /api/Attachment/Upload — multipart/form-data
   * @param file The file to upload
   * @param entityType Optional: context for the upload (e.g. 'contract', 'user')
   */
  upload(file: File, entityType?: string): Observable<UploadResponse> {
    const formData = new FormData();
    formData.append('file', file, file.name);
    if (entityType) {
      formData.append('entityType', entityType);
    }
    return this.apiService.postForm<UploadResponse>('Attachment/Upload', formData).pipe(
      catchError(err => throwError(() => err))
    );
  }

  /**
   * GET /api/User/GetBlobFile?filePath={path} — download file as blob
   */
  getBlobFile(filePath: string): Observable<Blob> {
    const token = localStorage.getItem('MT_token') || '';
    const language = localStorage.getItem('lang') || 'en';

    const headers = new HttpHeaders()
      .set('lang', language)
      .set('Authorization', 'Bearer ' + token);

    return this.http.get(`${environment.baseUrl}User/GetBlobFile`, {
      params: { filePath },
      headers,
      responseType: 'blob'
    }).pipe(
      catchError(err => throwError(() => err))
    );
  }
}
