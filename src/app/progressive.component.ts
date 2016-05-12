import { Component } from '@angular/core';
import { MdToolbar } from '@angular2-material/toolbar';
import { APP_SHELL_DIRECTIVES } from '@angular/app-shell';

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
  directives: [MdToolbar, APP_SHELL_DIRECTIVES]
})
export class ProgressiveAppComponent {
  title = 'progressive works!';
}
