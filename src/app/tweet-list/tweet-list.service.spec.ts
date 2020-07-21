import { TestBed } from '@angular/core/testing';

import { TweetListService } from './tweet-list.service';

describe('TweetListService', () => {
  let service: TweetListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TweetListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
