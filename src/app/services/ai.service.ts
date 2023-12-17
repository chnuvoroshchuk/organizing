import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AiService {

  constructor(private http: HttpClient) { }

  getAiAnswer(prompt: string) {
    const options = {
      params: new HttpParams().set('prompt', prompt)
    }
    return this.http.get('/api/chat', options);
  }

  getAiAnswer1(prompt: string): Observable<string> {
    /*const options = {
      params: new HttpParams().set('prompt', prompt)
    }*/
    return this.http
      .get<string>(
        `/api/chat?prompt=${prompt}`
      )
      .pipe(map(response => response));
  }
}
