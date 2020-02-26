import { TestBed } from '@angular/core/testing';

import { ButtonTestService } from './button-test.service';

describe('ButtonTestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ButtonTestService = TestBed.get(ButtonTestService);
    expect(service).toBeTruthy();
  });
});
