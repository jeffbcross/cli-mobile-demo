import { Component } from '@angular/core';
import { MdToolbar } from '@angular2-material/toolbar';
import { APP_SHELL_DIRECTIVES } from '@angular/app-shell';
import { SnapsComponent } from './+snaps';
import { RouteConfig , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';

@Component({
  moduleId: module.id,
  selector: 'progressive-app',
  template: `
  <md-toolbar>
    <h1 *shellNoRender>
      POSTRENDER
    </h1>
    <h1 *shellRender>
      PRERENDER
    </h1>
  </md-toolbar>
  <router-outlet *shellNoRender></router-outlet>
  `,
  styles: [],
  directives: [MdToolbar, APP_SHELL_DIRECTIVES, ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
  {path: '/snaps', component: SnapsComponent, as: 'Home', useAsDefault: true}
])
export class ProgressiveAppComponent {

}
