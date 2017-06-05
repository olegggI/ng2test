import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
  providers: [ApiService]
})
export class PostsListComponent implements OnInit {
	public posts: any;

	constructor(private api: ApiService) { }
	
	ngOnInit() {
		this.posts = this.api.getPosts();
	}

}
