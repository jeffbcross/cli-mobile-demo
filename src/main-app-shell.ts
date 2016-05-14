import {provide} from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import {ProgressiveAppComponent} from './app/';
import { NODE_LOCATION_PROVIDERS, NODE_ROUTER_PROVIDERS } from 'angular2-universal';
import { Jsonp, JSONP_PROVIDERS } from '@angular/http';

import {
  REQUEST_URL,
  ORIGIN_URL,
  NODE_HTTP_PROVIDERS
} from 'angular2-universal';
import {APP_SHELL_BUILD_PROVIDERS} from '@angular/app-shell';
import { DribbbleService } from './app/dribbble.service';

export const options = {
  directives: [
    // The component that will become the main App Shell
    ProgressiveAppComponent
  ],
  platformProviders: [
    provide(ORIGIN_URL, {
      useValue: ''
    }),
    NODE_LOCATION_PROVIDERS

  ],
  providers: [
    APP_SHELL_BUILD_PROVIDERS,
    // What URL should Angular be treating the app as if navigating
    provide(APP_BASE_HREF, {useValue: '/'}),
    provide(REQUEST_URL, {useValue: '/'}),
    NODE_ROUTER_PROVIDERS,
    NODE_HTTP_PROVIDERS,
    JSONP_PROVIDERS,
    provide(Jsonp, {
      // No-op
      useValue: {}
    }),
    DribbbleService
  ],
  async: true,
  preboot: false
};

