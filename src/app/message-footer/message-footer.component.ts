import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../model/message';

@Component({
  selector: 'app-message-footer',
  templateUrl: './message-footer.component.html',
  styleUrls: ['./message-footer.component.scss']
})
export class MessageFooterComponent implements OnInit {

  @Input() message!: Message;
  
  constructor() { }

  ngOnInit(): void {
  }

}
