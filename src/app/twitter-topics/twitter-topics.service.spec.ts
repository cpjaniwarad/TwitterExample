import { TestBed } from '@angular/core/testing';

import { TwitterTopicsService } from './twitter-topics.service';

describe('TwitterTopicsService', () => {
  let service: TwitterTopicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwitterTopicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
