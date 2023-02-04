import { TestBed } from '@angular/core/testing';

import { PlayTrackerService } from './play-tracker.service';

describe('PlayTrackerService', () => {
  let service: PlayTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
