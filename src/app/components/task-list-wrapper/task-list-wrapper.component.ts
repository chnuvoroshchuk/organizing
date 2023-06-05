import { Component, Input, OnInit, ViewChild } from '@angular/core';

const INITIAL_LIST = [
  { title: 'title', content: 'adasdasdasdasda', date: new Date() },
  {
    title: 'title 1',
    content: 'adasdasdasasdasdasddasda',
    date: new Date(),
  },
];

@Component({
  selector: 'app-task-list-wrapper',
  templateUrl: './task-list-wrapper.component.html',
  styleUrls: ['./task-list-wrapper.component.scss'],
})
export class TaskListWrapperComponent implements OnInit {
  @Input() type!: string;
  public isOpened = false;
  public taskList = INITIAL_LIST;

  constructor() {}

  ngOnInit(): void {}

  public toggleListOpened = () => {
    this.taskList = this.isOpened
      ? INITIAL_LIST
      : [
          ...this.taskList,
          {
            title: 'title 2',
            content: 'adasdasdasasdasdasddasda',
            date: new Date(),
          },
        ];

    this.isOpened = !this.isOpened;
  };
}
