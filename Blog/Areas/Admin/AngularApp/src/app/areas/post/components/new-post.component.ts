import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';

import { Http, Headers, RequestOptions } from '@angular/http';

import {AppConfig } from '../../../app.config';

import { PostService } from '../services';
import { Post, PostStatus } from '../models'

import { File } from '../../media/models';

@Component({
    selector: 'new-post',
    templateUrl: 'new-post.component.html',
    styles: [`
    .btn-clear-cover {
        margin-bottom:5px;
    }

`]

})
export class NewPostComponent implements OnInit{

    private postForm: FormGroup;
    private permerlinkEditStauts: boolean = false;
    private urlString: string = "this-is-your-title";
    private permerlinkBtnText = "Edit";
    private domainName = "yourdomain.com"
    private isPostSaved: boolean = false;
    private coverImage:File


    constructor(private _formBuilder: FormBuilder, private _postService: PostService,
        private _router: Router, private _activatedRoute: ActivatedRoute, private _appConfig: AppConfig) { }


    ngOnInit() {
        this.postForm = this._formBuilder.group({
            id: new FormControl(0),
            postTitle: new FormControl('', [Validators.required]),
            content: new FormControl(),
            permerlink: new FormControl('', [Validators.required]),
            postStatus: new FormControl(PostStatus.Draft)
        });
    }

    private Save() {
        console.log(this.postForm.value);
        this.postForm.controls["postStatus"].setValue(PostStatus.Draft);

        let postModel: Post = <Post>this.postForm.value;

        postModel.coverImage = this.coverImage;
        this._postService.CreateNewPost(postModel)
            .subscribe(res => {
                console.log(res);
                this.postForm.controls["id"].setValue(res.id);
},
            err => console.error(err),
            () => { this.postForm.markAsPristine(); });
    }

    private Publish() {
 
        this.postForm.controls["postStatus"].setValue(PostStatus.Publish);
        this._postService.CreateNewPost(this.postForm.value)
            .subscribe(res => console.log(res),
            err => console.error(err),
            () => {
                this.postForm.markAsPristine();
                this._router.navigate(['../all'], { relativeTo:this._activatedRoute });
            });
    }

    private EditPermerlink() {
        if (!this.permerlinkEditStauts) {
            this.permerlinkBtnText = "Save";
            this.permerlinkEditStauts = true;

            this.postForm.controls["permerlink"].setValue(this.urlString);
        } else {
            this.postForm.controls["permerlink"].touched
            this.urlString = this.postForm.controls["permerlink"].value;
            this.permerlinkBtnText = "Edit";
            this.permerlinkEditStauts = false;
        }

    }


    private GeneratePermerlink() {
        let title: string = this.postForm.controls['postTitle'].value;

        title = title.trim();
        var wordCount = title.split(' ').length;

        if (title != undefined && title != '') {
            for (let i = 0; i < wordCount; i++) {
                title = title.replace(' ', '-');
            }

            if (title.lastIndexOf('-') == title.length) {
                title = title.slice(title.lastIndexOf('-'));
            }

            this.urlString = title;
            this.postForm.controls["permerlink"].setValue(title);
        }

    }

    private SaveClose() {
        
        this.postForm.controls["postStatus"].setValue(PostStatus.Draft);
        this._postService.CreateNewPost(this.postForm.value)
            .subscribe(
            res => console.log(res),
            err => console.error(err),
            () => {
                this.postForm.markAsPristine();
                this._router.navigate(['../all'], { relativeTo: this._activatedRoute })
            });

    }

    private Close() {
        this._router.navigate(['../all'], { relativeTo: this._activatedRoute })
    }

    isDirty()
    {
        return this.postForm.dirty;
    }


    private GetCoverImage()
    {
      return this._appConfig.GetBaseUrl + "/api/file/" + this.coverImage.id + "/" + this.coverImage.fileName;
    }

    private SetCover(file:File)
    {
        this.coverImage = file;
    }

    private RemoveCoverImage() {
        this.coverImage = null;
    }
}
