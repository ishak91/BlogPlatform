import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

import { Observable } from 'rxjs/Observable'

import 'rxjs/add/observable/of'


import { Post } from '../models';
import { PostService } from '../services'

@Component({
    selector: 'list-post',
    templateUrl: 'list-post.component.html',
    styles: [`
       
    `]

})
export class ListPostComponent implements OnInit {
    posts: Observable<any[]>;

    constructor(private _router: Router, private _activatedRoute: ActivatedRoute, private _postService: PostService) {

    }

    Edit(post: Post) {
        let id = post.id;
        this._router.navigate(['../', id, { title: post.postTitle }], { relativeTo: this._activatedRoute });
    }

    Delete(post: Post) {
        var userConfim = confirm("Are you sure?");

        if (userConfim) {
            this._postService.DeletePost(post.id).subscribe(res => {
                this.posts = this._postService.GetAllPosts();
            }, err => {
                console.log(err);
                alert("Unable to Delete");
            });
        }
    }



    ngOnInit() {
        this.GetAllPost();
    }


    private GetAllPost() {

      //var posts = [{
      //  postTitle: "Test1",
      //  id: 10,
      //  postStatus: "Public"
      //}, {
      //  postTitle: "Test2",
      //  id: 10,
      //  postStatus: "Public"
      //}, {
      //  postTitle: "Test3",
      //  id: 10,
      //  postStatus: "Public"
      //}];

      this.posts =this._postService.GetAllPosts(); 
    }
}
