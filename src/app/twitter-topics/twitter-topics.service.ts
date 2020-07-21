import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class TwitterTopicsService {

  myWebSocket: WebSocketSubject<any> = webSocket('ws://localhost:8081');

  // api_url = 'https://api.twitter.com/1.1/trends/place.json?id=2295420';
  // requestOptions = {                                                                                                                                                                                 
  //   headers: new HttpHeaders().set('Authorization', 'Bearer AAAAAAAAAAAAAAAAAAAAAAs5%2FAAAAAAA%2BFhxtLDRr2AuKh5zdIHTczhg0Jg%3DltF0dqGzLFlmXH9wjI8HkO1gEzGlnCYUegwIOVVu1Umn8Yi1sX') 
  // };

  constructor(private httpClient:HttpClient) {

  }
  

  getTrendingTopics() {
    return this.myWebSocket.asObservable();
  }

  closeConnection() {
    this.myWebSocket.complete();
  }


}
