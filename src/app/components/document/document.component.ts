import { Component, Input, OnInit } from '@angular/core';
import {DocumentsService} from "../../services/documents.service";
import {DocumentInterface} from "../../core/interface/document.interface";

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss'],
})
export class DocumentComponent implements OnInit {
  @Input() document!: DocumentInterface;
  private blob: Blob | undefined;

  constructor(private  documentService: DocumentsService) {}

  ngOnInit(): void {}

  download() {
    this.documentService.downloadFile(this.document.id).toPromise().then((data: any) => {

      this.blob = new Blob([data], {type: this.document.type});

      const downloadURL = window.URL.createObjectURL(data);
      const link = document.createElement('a');
      link.href = downloadURL;
      link.download = this.document.name;
      link.click();

    });
  }

  async deleteFile() {
    await this.documentService.deleteDocumentById(this.document.id).toPromise();
    window.location.reload();
  }
}
