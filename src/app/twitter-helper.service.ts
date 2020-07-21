import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TwitterHelperService {

  constructor() { }

  private twitterTopicsTrigger = new Subject<any>();

  twitterTopicsTriggerObserve$ = this.twitterTopicsTrigger.asObservable();

  triggerTwitterTopicsApi() {
    this.twitterTopicsTrigger.next();
  }
}
