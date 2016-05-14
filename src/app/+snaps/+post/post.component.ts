import { Component, OnInit } from '@angular/core';
import { DribbbleService } from '../../dribbble.service';
import { RouteParams } from '@angular/router-deprecated';

@Component({
  moduleId: module.id,
  selector: 'app-post',
  templateUrl: 'post.component.html',
  styleUrls: ['post.component.css']
})
export class PostComponent implements OnInit {
  post;
	constructor(private dl:DribbbleService, private rp:RouteParams){}

  ngOnInit() {
    this.dl.getPost(this.rp.get('id')).subscribe(res => {
			this.post = res.json().data;
		});
  }
}
