import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AiService} from "../../services/ai.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  @ViewChild('scrollMe') private myScrollContainer!: ElementRef;
  public chatHistory: Array<{text: string, fromUser?: boolean}> = [
    { text: `Hi, I'm AI bot. How can I help you?` }
  ];

  constructor(private aiService: AiService) {}

  ngOnInit(): void {}

  async sendMessage(message: HTMLTextAreaElement) {
    const messageValue = message.value;
    message.value = '';
    this.chatHistory.push({ text: messageValue, fromUser: true });
    const chatContentEl = document.querySelector('.chat-content');

    if (chatContentEl) {
      chatContentEl.scrollTop = chatContentEl.scrollHeight;
    }

    const response = await this.aiService.getAiAnswer(messageValue).toPromise().catch((e) => e.error.text);
    console.log('response', response);
    this.chatHistory.push({text: response});
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { }
  }
}
