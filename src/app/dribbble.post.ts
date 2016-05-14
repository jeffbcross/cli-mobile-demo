import {Component} from '@angular/core';
import {Dribbble} from './dribbble.service';
import {RouteParams} from '@angular/router-deprecated';
@Component({
	selector: 'post',
	templateUrl: 'dribbble.post.html',
	providers: [Dribbble]
})
export class PostComponent {
	post;
	constructor(dl:Dribbble, rp:RouteParams){
		dl.getPost(rp.get('id')).subscribe(res => {
			this.post = res.json().data;
		});
	}
}
