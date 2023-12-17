import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {TaskService} from "../../services/task.service";

@Component({
  selector: 'app-task-list-wrapper',
  templateUrl: './task-list-wrapper.component.html',
  styleUrls: ['./task-list-wrapper.component.scss'],
})
export class TaskListWrapperComponent implements OnInit {
  @Input() type!: string;
  public isOpened = false;
  public fullList: Array<TaskInterface> = [];
  public shortList: Array<TaskInterface> = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.getTaskList();
  }

  public async getTaskList() {
    await this.taskService.getTaskByType(this.type.toUpperCase()).toPromise().then(res => {
      this.fullList = res.sort((a,b) => b.id - a.id);
      this.shortList = res.slice(0, 2)
    });
  }


  public toggleListOpened = () => {
    this.isOpened = !this.isOpened;
  };
}
