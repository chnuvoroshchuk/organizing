import { Component, OnInit } from '@angular/core';
import {TaskService} from "src/app/services/task.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getAllTasks().toPromise().then(res => console.log(res));
  }

}
