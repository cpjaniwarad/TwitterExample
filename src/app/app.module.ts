import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwitterTopicsComponent } from './twitter-topics/twitter-topics.component';
import { TweetListComponent } from './tweet-list/tweet-list.component';
import { TweetContentComponent } from './tweet-content/tweet-content.component';
import { TweetComponent } from './tweet/tweet.component';
import { TopicComponent } from './topic/topic.component';
import { TweetCountPipe } from './tweet-count.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TwitterTopicsComponent,
    TweetListComponent,
    TweetContentComponent,
    TweetComponent,
    TopicComponent,
    TweetCountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
