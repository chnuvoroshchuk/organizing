import { Component, Input, OnInit } from '@angular/core';
import {TaskService} from "../../services/task.service";
import {add} from "date-fns";

const STATUSES: Array<'PLANNED' | 'STARTED' | 'PAUSED' | 'DONE'> = [
  'PLANNED',
  'STARTED',
  'PAUSED',
  'DONE'
];

const STATUS_ICON_MAP: Record<string, string> = {
  PLANNED: 'fa-list-check',
  STARTED: 'fa-play',
  PAUSED: 'fa-pause',
  DONE: 'fa-check'
}

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {
  @Input() task!: TaskInterface;
  public availableStatuses = STATUSES;
  public statusIcons = STATUS_ICON_MAP;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    document.querySelectorAll('.dropdown').forEach(item => {
      item.addEventListener('click', function(event) {
        event.stopPropagation();
        item.classList.toggle('is-active');
      });
    });
  }

  public async deleteTask (id: number) {
    await this.taskService.deleteTaskById(id).toPromise().catch(e => console.error(e));
    document.location.reload();
  }

  openEditModal() {
    document.getElementById(`edit-task-modal-${this.task.id}`)?.classList.add('is-active');
  }

  async repeatTask() {
    const updatedTask = {...this.task, duration: add(new Date(this.task.duration), {days: 1})};

    await this.taskService.updateTask(updatedTask).toPromise();
    document.location.reload();
  }

  async updateStatus() {
    await this.taskService.updateTask(this.task).toPromise().then(() => window.location.reload());
  }
}
