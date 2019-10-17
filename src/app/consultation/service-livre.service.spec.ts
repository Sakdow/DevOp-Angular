import { TestBed } from '@angular/core/testing';

import { ServiceLivreService } from './service-livre.service';

describe('ServiceLivreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceLivreService = TestBed.get(ServiceLivreService);
    expect(service).toBeTruthy();
  });
});
