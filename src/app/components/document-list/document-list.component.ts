import { Component, OnInit } from '@angular/core';
import {DocumentsService} from "../../services/documents.service";

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss'],
})
export class DocumentListComponent implements OnInit {
  public documents: any = [];

  constructor(private documentService: DocumentsService) {
  }

  ngOnInit(): void {
    this.getDocuments();
  }

  private async getDocuments() {
    await this.documentService.getAll().toPromise().then(res => this.documents = res);
  }


  async onFileSelect(event: any) {
    const file: File = event.target?.files[0];
    await this.documentService.uploadFile(file).toPromise();
    window.location.reload();
  }

}
