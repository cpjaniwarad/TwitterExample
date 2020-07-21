import { Component } from '@angular/core';
import {TwitterHelperService} from './twitter-helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CommApp';
  constructor(private twitterHelperService : TwitterHelperService) {

  }

  refreshTrendingTopics() {
    this.twitterHelperService.triggerTwitterTopicsApi();
  }
}
