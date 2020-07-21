import { Injectable } from '@angular/core';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';
import {Subject} from 'rxjs';
import { Tweetinfo } from './tweet-list/tweetinfo';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  //private tweetListService : TweetListService
  constructor() {

  }

  myWebSocket: WebSocketSubject<any> = webSocket('ws://localhost:8080');

  getConnection() {
    return this.myWebSocket.asObservable();
  }
  
}
