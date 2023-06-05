import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-task-modal',
  templateUrl: './create-task-modal.component.html',
  styleUrls: ['./create-task-modal.component.scss'],
})
export class CreateTaskModalComponent implements OnInit {
  @Input() taskType!: string;

  constructor() {}

  ngOnInit(): void {}
}
