import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, CanDeactivate, ComponentInstruction} from '@angular/router-deprecated'
import {Dribbble} from './dribbble.service';
@Component({
	selector: 'home',
	templateUrl: 'dribbble.home.html',
	providers: [Dribbble],
    directives: [ROUTER_DIRECTIVES]
})
export class HomeComponent {
	name: string = 'World';
    posts;
    dl:Dribbble;
    page = 0;
    constructor(dl: Dribbble){
        this.dl = dl;
        this.page = 1;
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
