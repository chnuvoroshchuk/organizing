import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import any = jasmine.any;

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  constructor(private http: HttpClient) { }

  uploadFile(file: any) {
   const body = '';
   //TODO: file firmat
    console.log(body);
    return this.http.post('/api/upload/db', body, httpOptions);
  }
  downloadFile(id: number) {
    return this.http.get('/api/download/' + id);
  }
}
