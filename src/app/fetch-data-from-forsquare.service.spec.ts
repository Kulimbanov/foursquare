import { TestBed, inject } from '@angular/core/testing';

import { FetchDataFromForsquareService } from './fetch-data-from-forsquare.service';

describe('FetchDataFromForsquareService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchDataFromForsquareService]
    });
  });

  it('should be created', inject([FetchDataFromForsquareService], (service: FetchDataFromForsquareService) => {
    expect(service).toBeTruthy();
  }));
});
