import { TestBed, inject } from '@angular/core/testing';

import { LeasewebService } from './leaseweb.service';

describe('LeasewebService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeasewebService]
    });
  });

  it('should be created', inject([LeasewebService], (service: LeasewebService) => {
    expect(service).toBeTruthy();
  }));
});
