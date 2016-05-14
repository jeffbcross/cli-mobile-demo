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
  {path: '/:id', component: PostComponent},
  {path: 'list', component: ListComponent}
])
export class SnapsComponent implements CanDeactivate, OnInit {
    name: string = 'World';
    posts;
    dl:DribbbleService;
    page = 0;
    constructor(dl: DribbbleService){
        this.dl = dl;
        this.page = 1;

    }

    ngOnInit() {
      this.dl.getPosts(this.page).subscribe(res => {
        this.posts = res.json().data;
      });
    }

    routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction) {
        window.scrollTo(0, 0);
        return true;
    }
    gotoPost(id){
        alert(id);
    }
    loadMore() {
        this.page++;
        this.dl.getPosts(this.page).subscribe(res => {
            res.json().data.forEach(post => {
                this.posts.push(post);
            });
        })
    }

}

