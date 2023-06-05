import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss'],
})
export class DocumentListComponent implements OnInit {
  public documents = [
    {
      name: 'Document 1',
    },
    {
      name: 'Document 2',
    },
    {
      name: 'Document 3',
    },
    {
      name: 'Document 4',
    },
    {
      name: 'Document 5',
    },
    {
      name: 'Document 6',
    },
    {
      name: 'Document 4',
    },
    {
      name: 'Document 5',
    },
    {
      name: 'Document 6',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
