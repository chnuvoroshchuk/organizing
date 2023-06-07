import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  constructor(private taskService: TaskService) {}
  //
  // public tasks = {
  //   [TaskTypeEnum.DAILY]: [],
  //   [TaskTypeEnum.WEEKLY]: [],
  //   [TaskTypeEnum.MONTHLY]: [],
  // }

  ngOnInit(): void {
    this.getTasks();
  }

  async getTasks() {
   await this.taskService
      .getAllTasks()
      .toPromise();
      // .catch(e => console.error(e))
      // .then((res) => console.log('result', res));
  }
}
