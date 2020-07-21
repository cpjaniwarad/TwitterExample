import { TestBed } from '@angular/core/testing';

import { TwitterHelperService } from './twitter-helper.service';

describe('TwitterHelperService', () => {
  let service: TwitterHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwitterHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
