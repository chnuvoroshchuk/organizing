import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {stat} from "fs";

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
    return this.http.get('/api/task/' + title);
  }

  getTaskByStatus(status: string) {
    return this.http.get('/api/task/' + status);
  }

  getTaskByType(type: string) {
    return this.http.get('/api/task/' + type);
  }

  addTask(task: any) {
    const body = JSON.stringify(task);
    console.log(body);
    return this.http.post('/api/task/save', body, httpOptions);
  }

  deleteTaskById(id: number) {
    return this.http.delete('/api/task/' + id);
  }

  //TODO: check task
}
