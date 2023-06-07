import { Component, Input, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {TaskService} from "../../../services/task.service";

@Component({
  selector: 'app-create-task-modal',
  templateUrl: './create-task-modal.component.html',
  styleUrls: ['./create-task-modal.component.scss'],
})
export class CreateTaskModalComponent implements OnInit {
  @Input() taskType!: string;

  public taskForm = this.formBuilder.group({
    description: new FormControl(null, [Validators.required]),
    title: new FormControl(null, [Validators.required]),
    type: new FormControl(null),
    status: new FormControl(null, [Validators.required]),
    duration: new FormControl(null, [Validators.required]),
    canEdit: new FormControl(null),
    repeat: new FormControl(null)
  })

  constructor(private formBuilder: FormBuilder, private taskService: TaskService) {}

  ngOnInit(): void {}

  async onSubmit() {
    this.taskForm.value.type = this.taskType.toUpperCase()
    const body = {...this.taskForm.value};
    await this.taskService.addTask(body).toPromise();
    console.log(body);
  }
}
