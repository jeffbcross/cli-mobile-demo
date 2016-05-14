import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, RouteConfig } from '@angular/router-deprecated';
import { PostComponent } from './+post';

@Component({
  moduleId: module.id,
  selector: 'app-snaps',
  templateUrl: 'snaps.component.html',
  styleUrls: ['snaps.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/:id', component: PostComponent}
])
export class SnapsComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
