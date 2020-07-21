import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tweet-content',
  templateUrl: './tweet-content.component.html',
  styleUrls: ['./tweet-content.component.scss']
})
export class TweetContentComponent implements OnInit {

  lastUpdatedAt : string;

  constructor() { }

  ngOnInit(): void {
    this.lastUpdatedAt = '';
  }

}
