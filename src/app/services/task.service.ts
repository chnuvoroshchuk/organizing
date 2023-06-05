import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) {
  }

  getAllTasks() {
    return this.http.get('/api/tasks');
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

  getTaskByType(type: string) {
    const options = {
      params: new HttpParams().set('type', type)
    }
    return this.http.get('/api/task/type/' + type);
  }

  addTask(task: TaskInterface) {
    const body = JSON.stringify(task);
    console.log(body);
    return this.http.post('/api/task/save', body, httpOptions);
  }

  deleteTaskById(id: number) {
    const options = {
      options: new HttpParams().set('id', id)
    }
    return this.http.delete('/api/task/' + options);
  }

  //TODO: check task
}
