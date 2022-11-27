import { TestBed } from '@angular/core/testing';

import { SocialMediaCardService } from './social-media-card.service';

describe('SocialMediaCardService', () => {
  let service: SocialMediaCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocialMediaCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
