import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {TaskService} from "../../../services/task.service";

@Component({
  selector: 'app-edit-task-modal',
  templateUrl: './edit-task-modal.component.html',
  styleUrls: ['./edit-task-modal.component.scss']
})
export class EditTaskModalComponent implements OnInit {
  @Input() task!: TaskInterface

  public taskForm = this.formBuilder.group({
    description: new FormControl(this.task?.description, [Validators.required]),
    title: new FormControl(this.task?.title, [Validators.required]),
    status: new FormControl(this.task?.status, [Validators.required]),
    duration: new FormControl(this.task?.duration, [Validators.required]),
    canEdit: new FormControl(this.task?.canEdit)
  })

  constructor(private formBuilder: FormBuilder, private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskForm.get('description')?.setValue(this.task.description);
    this.taskForm.get('title')?.setValue(this.task.title);
    this.taskForm.get('status')?.setValue(this.task.status);
    this.taskForm.get('duration')?.setValue((new Date(this.task.duration)).toISOString().slice(0, -1));
    this.taskForm.get('canEdit')?.setValue(this.task.canEdit);
  }

  async onSubmit() {
    const body =  {...this.task, ...this.taskForm.value};

    await this.taskService.updateTask(body).toPromise();
    this.onModalClose();
    window.location.reload();
    console.log(body);
  }

  onModalClose() {
    document.getElementById(`edit-task-modal-${this.task.id}`)?.classList.remove('is-active');
  }
}
