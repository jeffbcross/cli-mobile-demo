import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { ProgressiveAppComponent } from '../app/progressive.component';

beforeEachProviders(() => [ProgressiveAppComponent]);

describe('App: Progressive', () => {
  it('should create the app',
      inject([ProgressiveAppComponent], (app: ProgressiveAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'progressive works!\'',
      inject([ProgressiveAppComponent], (app: ProgressiveAppComponent) => {
    expect(app.title).toEqual('progressive works!');
  }));
});
