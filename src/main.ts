import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { ProgressiveAppComponent, environment } from './app/';
import { APP_SHELL_RUNTIME_PROVIDERS } from '@angular/app-shell';

import { provide } from '@angular/core';
import { Http, HTTP_PROVIDERS, Jsonp, JSONP_PROVIDERS } from '@angular/http'
import { ROUTER_PROVIDERS } from '@angular/router-deprecated'

import {
  PlatformLocation,
  Location,
  LocationStrategy,
  HashLocationStrategy,
  PathLocationStrategy,
  APP_BASE_HREF}
from '@angular/common';

import { DribbbleService } from './app/dribbble.service';

if (environment.production) {
  enableProdMode();
}

bootstrap(ProgressiveAppComponent, [
  APP_SHELL_RUNTIME_PROVIDERS,
  JSONP_PROVIDERS,
  ROUTER_PROVIDERS,
  provide(APP_BASE_HREF, {useValue: '/'}),
  DribbbleService]);
