import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component({
  moduleId: module.id,
  selector: 'app-snaps',
  templateUrl: 'snaps.component.html',
  styleUrls: ['snaps.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class SnapsComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
