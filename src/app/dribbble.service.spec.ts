import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { DribbbleService } from './dribbble.service';

describe('Dribbble Service', () => {
  beforeEachProviders(() => [DribbbleService]);

  it('should ...',
      inject([DribbbleService], (service: DribbbleService) => {
    expect(service).toBeTruthy();
  }));
});
