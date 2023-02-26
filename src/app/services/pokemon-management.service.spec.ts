import { TestBed } from '@angular/core/testing';

import { PokemonManagementService } from './pokemon-management.service';

describe('PokemonManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokemonManagementService = TestBed.get(PokemonManagementService);
    expect(service).toBeTruthy();
  });
});
