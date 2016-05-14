import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { PostComponent } from './+post';
import { Routes , ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-snaps',
  templateUrl: 'snaps.component.html',
  styleUrls: ['snaps.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
@Routes([
  {path: '/post', component: PostComponent}
])
export class SnapsComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
