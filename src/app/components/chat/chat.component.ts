import { Component, OnInit } from '@angular/core';
import {AiService} from "../../services/ai.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  public chatHistory: Array<{text: string, fromUser?: boolean}> = [
    { text: `Hi, I'm AI bot. How can I help you?` }
  ];

  constructor(private aiService: AiService) {}

  ngOnInit(): void {}

  async sendMessage(message: HTMLTextAreaElement) {
    this.chatHistory.push({ text: message.value, fromUser: true });
    const chatContentEl = document.querySelector('.chat-content');

    if (chatContentEl) {
      chatContentEl.scrollTop = chatContentEl.scrollHeight;
    }

    const response = await this.aiService.getAiAnswer(message.value).toPromise();
    console.log('response', response);
    // this.chatHistory.push({text: response});

    message.value = '';
  }
}
