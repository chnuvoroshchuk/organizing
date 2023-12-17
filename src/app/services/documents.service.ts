import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  constructor(private http: HttpClient) { }

  uploadFile(file: any) {
    let formData: FormData = new FormData();
    formData.append('file', file, file.name)

    const httpOption = {
      headers: new HttpHeaders({'Content-Type': 'multipart/form-data','Accept': '*/*' }),
      params: new HttpParams().set('username', localStorage.getItem('username') as string),
    }
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', '*/*');

    return this.http.post('/api/upload/db', formData, httpOption);
  }

  downloadFile(id: number) {

    const httpOptions = {
      responseType: 'blob' as 'json'
  };

    return this.http.get('/api/download/' + id, httpOptions);
  }

  getAll() {
    const options = {
      params: new HttpParams().set('username', localStorage.getItem('username') as string),
    };
    return this.http.get('/api/download/all', options);
  }

  deleteDocumentById(id: number) {
    return this.http.delete(`/api/document/${id}`);
  }

}
