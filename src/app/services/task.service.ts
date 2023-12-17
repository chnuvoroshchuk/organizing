import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) {
  }

  getAllTasks(): Observable<Array<TaskInterface>> {
    return this.http.get<Array<TaskInterface>>('/api/tasks');
  }

  getTaskByTitle(title: string) {
    const options = {
      params: new HttpParams().set('title', title)
    };
    return this.http.get('/api/task/{title}' + options);
  }

  getTaskByStatus(status: string) {
    const options = {
      params: new HttpParams().set('status', status)
    }
    return this.http.get('/api/task/status/' + options);
  }

  getTaskByType(type: string): Observable<Array<TaskInterface>> {
    const options = {
      params: new HttpParams().set('username', localStorage.getItem('username') as string),
    };
    return this.http.get<Array<TaskInterface>>(`/api/task/type/${type}`, options);
  }

  addTask(task: TaskInterface) {
    const httpOption = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      params: new HttpParams().set('username', localStorage.getItem('username') as string),
    }
    const body = JSON.stringify(task);
    console.log(body);
    return this.http.post('/api/task/save', body, httpOption);
  }
  updateTask(task: TaskInterface) {
    const httpOption = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      params: new HttpParams().set('username', localStorage.getItem('username') as string),
    }
    const body = JSON.stringify(task);
    console.log(body);
    return this.http.post('/api/task/save', body, httpOption);
  }

  deleteTaskById(id: number) {
    return this.http.delete(`/api/task/${id}`);
  }
}
