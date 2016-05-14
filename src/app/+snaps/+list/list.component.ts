import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, RouteConfig, CanDeactivate, ComponentInstruction } from '@angular/router-deprecated';
import { DribbbleService } from '../../dribbble.service';

@Component({
  moduleId: module.id,
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.css'],
  providers: [DribbbleService],
  directives: [ROUTER_DIRECTIVES]
})
export class ListComponent implements OnInit {
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
