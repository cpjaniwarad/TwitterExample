import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterTopicsComponent } from './twitter-topics.component';

describe('TwitterTopicsComponent', () => {
  let component: TwitterTopicsComponent;
  let fixture: ComponentFixture<TwitterTopicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitterTopicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
