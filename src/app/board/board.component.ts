
import { Component, OnInit } from '@angular/core';
import { Message } from '../model/message';
import { MessagesService } from '../services/messages.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  messages!: Message[];

  constructor(private msgService: MessagesService) { }

  ngOnInit(): void {
    this.msgService.getMessages().subscribe((messages) => {
      this.messages = messages;
      console.log(this.messages);
    }, (err) => { console.error(err) });
  }

    /**
   * Track by message id method
   * @param index Message index
   * @param message Message 
   */
  trackByMessageId(index:number, message:Message): number {
    return message.id;
  }
}
