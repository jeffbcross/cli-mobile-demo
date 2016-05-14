import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, RouteConfig, CanDeactivate, ComponentInstruction } from '@angular/router-deprecated';
import { PostComponent } from './+post';
import { DribbbleService } from '../dribbble.service';
import { ListComponent } from './+list';

@Component({
  moduleId: module.id,
  selector: 'app-snaps',
  templateUrl: 'snaps.component.html',
  styleUrls: ['snaps.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/:id', component: PostComponent, name: 'Post'},
  {path: 'list', component: ListComponent, useAsDefault: true}
])
export class SnapsComponent {}

