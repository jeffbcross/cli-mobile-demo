import { Component } from '@angular/core';
import { MdToolbar } from '@angular2-material/toolbar';
import { APP_SHELL_DIRECTIVES } from '@angular/app-shell';
import { SnapsComponent } from './+snaps';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

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
  `,
  styles: [],
  directives: [MdToolbar, APP_SHELL_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/snaps', component: SnapsComponent}
])
export class ProgressiveAppComponent {

}
