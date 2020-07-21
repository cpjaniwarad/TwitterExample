import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {Tweetinfo} from './tweetinfo';
import {WebSocketService} from './../web-socket-service.service';

@Injectable({
  providedIn: 'root'
})
export class TweetListService {

  constructor(private webSocketService : WebSocketService) {

  }

  getTweets() {
    return this.webSocketService.getConnection();
  }

  
}
