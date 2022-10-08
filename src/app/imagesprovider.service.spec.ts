import { TestBed } from '@angular/core/testing';

import { ImagesproviderService } from './imagesprovider.service';

describe('ImagesproviderService', () => {
  let service: ImagesproviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagesproviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
