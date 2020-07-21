import { Component, OnInit } from '@angular/core';
import {TweetListService} from './tweet-list.service';

@Component({
  selector: 'app-tweet-list',
  templateUrl: './tweet-list.component.html',
  styleUrls: ['./tweet-list.component.scss']
})
export class TweetListComponent implements OnInit {

  
  tweets = [];
  constructor(private tweetListService : TweetListService) { 

  }

  getTweets() {
    this.tweetListService.getTweets().subscribe(info => {
      this.tweets.unshift(info);
    });
  }

  ngOnInit(): void {
    this.tweets = [];
    this.getTweets();
  }

}
