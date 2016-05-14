import {Component, provide} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {Http, HTTP_PROVIDERS, Jsonp, JSONP_PROVIDERS} from '@angular/http'
import {ROUTER_DIRECTIVES, RouteConfig, ROUTER_PROVIDERS} from '@angular/router-deprecated'

import {
  PlatformLocation,
  Location,
  LocationStrategy,
  HashLocationStrategy,
  PathLocationStrategy,
  APP_BASE_HREF}
from '@angular/common';

import {HomeComponent} from './dribbble.home';
import {PostComponent} from './dribbble.post';

@RouteConfig([
    {path: '/snaps', component: HomeComponent, as: 'Home', useAsDefault: true},
    {path: '/snaps/:id', component: PostComponent, as: 'Post'}
])
@Component({
    selector: 'dribbble',
    template: `
    <div class="">
      <nav class="navbar navbar-dark navbar-fixed-top bg-primary bg-faded">
        <div class="collapse navbar-toggleable-xs container" id="navbar-header">
          <a class="navbar-brand" [routerLink]="['/Home']">NG2 Dribbble</a>
        </div>
      </nav>
      <router-outlet></router-outlet>
    </div>

    `,
    directives: [ROUTER_DIRECTIVES]
})
export class DribbbleComponent {

}
// bootstrap(DribbbleComponent, [JSONP_PROVIDERS, ROUTER_PROVIDERS, provide(LocationStrategy, { useClass: HashLocationStrategy })
// ,provide(APP_BASE_HREF, {useValue: '/'})]);
