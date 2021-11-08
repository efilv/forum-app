import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Message } from '../model/message';
import { getData } from '../mock/mock';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() { }

  public getMessages(): Observable<Message[]> {
    return of(getData());
  }
}
