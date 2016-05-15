import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ROUTER_DIRECTIVES, RouteConfig, CanDeactivate, ComponentInstruction } from '@angular/router-deprecated';
import { DribbbleService } from '../../dribbble.service';

import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/scan';

@Component({
  moduleId: module.id,
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.css'],
  directives: [ROUTER_DIRECTIVES],
  // Since using async pipe in template, only run changeDetection
  // when a new value is emitted from posts observable
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
    posts;
    page = new BehaviorSubject(0).scan((prev:number) => {
      // Automatically incremement page whenever next() is called
      return prev + 1;
    }, 0);
    constructor(public dl: DribbbleService) {}

    ngOnInit() {
      this.posts = this.page
        // Automatically fetch more data when page changes
        .mergeMap(page => this.dl.getPosts(page))
        // Merge all pages of data into single list
        .scan((acc:any[], res) => acc.concat(res.json().data), []);
    }

    routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction) {
        window.scrollTo(0, 0);
        return true;
    }
}
