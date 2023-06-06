import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  public chatHistory = [
    { text: `Hi, I'm AI bot. How can I help you?` },
    { text: 'Hey. Fuck off', fromUser: true },
    {
      text:
        '.chat-wrapper {\n' +
        '  height: 600px;\n' +
        '\n' +
        '  .chat-window {\n' +
        '    height: 100%;\n' +
        '    display: flex;\n' +
        '    flex-direction: column;\n' +
        '  }\n' +
        '\n' +
        '  .chat-content {\n' +
        '    height: 100%;\n' +
        '    display: flex;\n' +
        '    flex-direction: column;\n' +
        '    gap: 10px;\n' +
        '    overflow-y: scroll;\n' +
        '    max-height: 500px;\n' +
        '\n' +
        '    .chat-message {\n' +
        '      width: 500px;\n' +
        '      border-radius: 5px;\n' +
        '      padding: 12px;\n' +
        '      background-color: #c7c7c7;\n' +
        '      margin-left: 0;\n' +
        '      position: relative;\n' +
        '\n' +
        '      &:after {\n' +
        '        border: 1.5em solid transparent;\n' +
        '        border-right-color: #c7c7c7;\n' +
        '        content: "";\n' +
        '        margin-top: -1.5em;\n' +
        '        margin-right: -0.2em;\n' +
        '        position: absolute;\n' +
        '        top: 50%;\n' +
        '        right: 100%;\n' +
        '        width: 0;\n' +
        '        height: 0;\n' +
        '      }\n' +
        '\n' +
        '      &.fromUser {\n' +
        '        margin-right: 0;\n' +
        '        margin-left: auto;\n' +
        '        background-color: #00d1b2;\n' +
        '        color: white;\n' +
        '\n' +
        '        &:after {\n' +
        '          border-left-color: #00d1b2;\n' +
        '          border-right: none;\n' +
        '          margin-left: -0.2em;\n' +
        '          left: 100%;\n' +
        '        }\n' +
        '      }\n' +
        '    }\n' +
        '  }\n' +
        '\n' +
        '  .user-input {\n' +
        '    margin: auto auto 0 auto;\n' +
        '    border: none;\n' +
        '    width: 100%;\n' +
        '    display: flex;\n' +
        '    justify-content: space-around;\n' +
        '    align-items: center;\n' +
        '\n' +
        '    textarea {\n' +
        '      max-width: 90%;\n' +
        '      min-width: 90%;\n' +
        '    }\n' +
        '  }\n' +
        '}\n',
      fromUser: true,
    },
    { text: 'Hey. Fuck off', fromUser: true },
  ];

  constructor() {}

  ngOnInit(): void {}

  sendMessage(message: HTMLTextAreaElement) {
    this.chatHistory.push({ text: message.value, fromUser: true });
    const chatContentEl = document.querySelector('.chat-content');

    if (chatContentEl) {
      chatContentEl.scrollTop = chatContentEl.scrollHeight + 100;
    }

    message.value = '';
  }
}
