import { TestBed } from '@angular/core/testing';

import { CosmetiqueGuard } from './cosmetique.guard';

describe('CosmetiqueGuard', () => {
  let guard: CosmetiqueGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CosmetiqueGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
