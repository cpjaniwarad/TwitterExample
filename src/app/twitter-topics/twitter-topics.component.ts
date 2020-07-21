import { Component, OnInit } from '@angular/core';
import {TwitterTopicsService} from './twitter-topics.service';
import {TwitterHelperService} from './../twitter-helper.service';

@Component({
  selector: 'app-twitter-topics',
  templateUrl: './twitter-topics.component.html',
  styleUrls: ['./twitter-topics.component.scss']
})
export class TwitterTopicsComponent implements OnInit {

  topics : any;

  constructor(private twitterTopicsService : TwitterTopicsService,
              private twitterHelperService : TwitterHelperService) { }

  getTrendingTopics() {
    this.topics = [];
    this.twitterTopicsService.getTrendingTopics().subscribe(data => {
      this.topics = data[0].trends.slice(0, 10);
      this.twitterTopicsService.closeConnection();
    }, error => {
      alert("Error in Web socket connection. Refresh topics again.");
      //Implicitly we can use the below method for internal trigger
      //this.getTrendingTopics();
    });
  }

  ngOnInit(): void {
    this.topics = [];
    this.getTrendingTopics();
    this.twitterHelperService.twitterTopicsTriggerObserve$.subscribe(data => {
      this.getTrendingTopics();
    });
  }

}
