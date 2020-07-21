import { TweetCountPipe } from './tweet-count.pipe';

describe('TweetCountPipe', () => {
  it('create an instance', () => {
    const pipe = new TweetCountPipe();
    expect(pipe).toBeTruthy();
  });
});
