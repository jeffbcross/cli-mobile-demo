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
    moduleId: module.id,
    selector: 'dribbble',
    templateUrl: './dribbble.app.html',
    directives: [ROUTER_DIRECTIVES]
})
export class DribbbleComponent {

}
// bootstrap(DribbbleComponent, [JSONP_PROVIDERS, ROUTER_PROVIDERS, provide(LocationStrategy, { useClass: HashLocationStrategy })
// ,provide(APP_BASE_HREF, {useValue: '/'})]);
