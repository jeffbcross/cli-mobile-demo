import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'progressive-app',
  template: `
  <h1>
    {{title}}
  </h1>
  `,
  styles: []
})
export class ProgressiveAppComponent {
  title = 'progressive works!';
}
