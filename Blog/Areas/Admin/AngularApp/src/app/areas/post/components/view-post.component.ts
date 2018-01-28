import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { AppConfig } from '../../../app.config';

import { PostService } from '../services';
import { PostStatus, Post } from '../models';

import { File } from '../../media/models';

@Component({
    selector: 'view-post',
    templateUrl: 'view-post.component.html',
    styles: [`
      .btn-clear-cover {
        margin-bottom: 5px;
    }`]
})
export class ViewPostComponent {

    private postForm: FormGroup;
    private permerlinkEditStauts: boolean = false;
    private urlString: string = "this-is-your-title";
    private permerlinkBtnText = "Edit";
    private domainName = "yourdomain.com"
    private isPostSaved: boolean = false;
    private postStauts: string = "Publish";
    private postId: number;
    private coverImage: File;

    constructor(private _formBuilder: FormBuilder, private _postService: PostService,
        private _router: Router, private _activatedRoute: ActivatedRoute, private _appConfig: AppConfig) { }


    ngOnInit() {


        this._activatedRoute.params.forEach((param: Params) => {

            this.postId = +param["id"];

        });

        this.postForm = this._formBuilder.group({
            id: new FormControl(0),
            postTitle: new FormControl('', [Validators.required]),
            content: new FormControl(),
            permerlink: new FormControl('', [Validators.required]),
            postStatus: new FormControl()
        });

        this.GetPost(this.postId);


    }

    private Save() {
        

        let postModel: Post = <Post>this.postForm.value;
        postModel.coverImage = this.coverImage;

        this._postService.CreateNewPost(postModel)
            .subscribe(res => {

                this.postForm.controls["id"].setValue(res.id);
            },
            err => console.error(err),
            () => { this.postForm.markAsPristine(); });
    }

    private Publish() {

        this.postForm.controls["postStatus"].setValue(PostStatus.Publish);
        let postModel: Post = <Post>this.postForm.value;
        postModel.coverImage = this.coverImage;

        this._postService.CreateNewPost(postModel)
            .subscribe(res => console.log(res),
            err => console.error(err),
            () => {
                this.postForm.markAsPristine();
                this._router.navigate(['../all'], {
                    relativeTo: this._activatedRoute
                });
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

    private GetPost(id: number) {
        this._postService.GetPost(id).subscribe(res => {

            this.postForm.controls["postTitle"].setValue(res.postTitle);
            this.postForm.controls["content"].setValue(res.content);
            this.postForm.controls["permerlink"].setValue(res.permerlink);
            this.postForm.controls["id"].setValue(res.id);
            this.postForm.controls["postStatus"].setValue(res.postStatus);
            this.urlString = res.permerlink;
            this.postStauts = res.postStatus;
            this.coverImage = res.coverImage;
        });
    }

    isDirty() {
        return this.postForm.dirty;
    }

    private GetCoverImage() {
        return this._appConfig.GetBaseApiUrl() + "/FileHandler/" + this.coverImage.id + "/" + this.coverImage.fileName;
    }

    private SetCover(file: File) {
        this.coverImage = file;
    }

    private RemoveCoverImage() {
        this.coverImage = null;
    }

}
