import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AiService {

  constructor(private http: HttpClient) { }

  getAiAnswer(prompt: string) {
    const options = {
      params: new HttpParams().set('prompt', prompt)
    }
    return this.http.get('/api/chat' + options);
  }
}
