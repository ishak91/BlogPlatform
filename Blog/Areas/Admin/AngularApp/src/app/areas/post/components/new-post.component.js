"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var app_config_1 = require("../../../app.config");
var services_1 = require("../services");
var models_1 = require("../models");
var NewPostComponent = (function () {
    function NewPostComponent(_formBuilder, _postService, _router, _activatedRoute, _appConfig) {
        this._formBuilder = _formBuilder;
        this._postService = _postService;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this._appConfig = _appConfig;
        this.permerlinkEditStauts = false;
        this.urlString = "this-is-your-title";
        this.permerlinkBtnText = "Edit";
        this.domainName = "yourdomain.com";
        this.isPostSaved = false;
    }
    NewPostComponent.prototype.ngOnInit = function () {
        this.postForm = this._formBuilder.group({
            id: new forms_1.FormControl(0),
            postTitle: new forms_1.FormControl('', [forms_1.Validators.required]),
            content: new forms_1.FormControl(),
            permerlink: new forms_1.FormControl('', [forms_1.Validators.required]),
            postStatus: new forms_1.FormControl(models_1.PostStatus.Draft)
        });
    };
    NewPostComponent.prototype.Save = function () {
        var _this = this;
        console.log(this.postForm.value);
        this.postForm.controls["postStatus"].setValue(models_1.PostStatus.Draft);
        var postModel = this.postForm.value;
        postModel.coverImage = this.coverImage;
        this._postService.CreateNewPost(postModel)
            .subscribe(function (res) {
            console.log(res);
            _this.postForm.controls["id"].setValue(res.id);
        }, function (err) { return console.error(err); }, function () { _this.postForm.markAsPristine(); });
    };
    NewPostComponent.prototype.Publish = function () {
        var _this = this;
        this.postForm.controls["postStatus"].setValue(models_1.PostStatus.Publish);
        this._postService.CreateNewPost(this.postForm.value)
            .subscribe(function (res) { return console.log(res); }, function (err) { return console.error(err); }, function () {
            _this.postForm.markAsPristine();
            _this._router.navigate(['../all'], { relativeTo: _this._activatedRoute });
        });
    };
    NewPostComponent.prototype.EditPermerlink = function () {
        if (!this.permerlinkEditStauts) {
            this.permerlinkBtnText = "Save";
            this.permerlinkEditStauts = true;
            this.postForm.controls["permerlink"].setValue(this.urlString);
        }
        else {
            this.postForm.controls["permerlink"].touched;
            this.urlString = this.postForm.controls["permerlink"].value;
            this.permerlinkBtnText = "Edit";
            this.permerlinkEditStauts = false;
        }
    };
    NewPostComponent.prototype.GeneratePermerlink = function () {
        var title = this.postForm.controls['postTitle'].value;
        title = title.trim();
        var wordCount = title.split(' ').length;
        if (title != undefined && title != '') {
            for (var i = 0; i < wordCount; i++) {
                title = title.replace(' ', '-');
            }
            if (title.lastIndexOf('-') == title.length) {
                title = title.slice(title.lastIndexOf('-'));
            }
            this.urlString = title;
            this.postForm.controls["permerlink"].setValue(title);
        }
    };
    NewPostComponent.prototype.SaveClose = function () {
        var _this = this;
        this.postForm.controls["postStatus"].setValue(models_1.PostStatus.Draft);
        this._postService.CreateNewPost(this.postForm.value)
            .subscribe(function (res) { return console.log(res); }, function (err) { return console.error(err); }, function () {
            _this.postForm.markAsPristine();
            _this._router.navigate(['../all'], { relativeTo: _this._activatedRoute });
        });
    };
    NewPostComponent.prototype.Close = function () {
        this._router.navigate(['../all'], { relativeTo: this._activatedRoute });
    };
    NewPostComponent.prototype.isDirty = function () {
        return this.postForm.dirty;
    };
    NewPostComponent.prototype.GetCoverImage = function () {
        return this._appConfig.GetBaseApiUrl() + "/FileHandler/" + this.coverImage.id + "/" + this.coverImage.fileName;
    };
    NewPostComponent.prototype.SetCover = function (file) {
        this.coverImage = file;
    };
    NewPostComponent.prototype.RemoveCoverImage = function () {
        this.coverImage = null;
    };
    return NewPostComponent;
}());
NewPostComponent = __decorate([
    core_1.Component({
        selector: 'new-post',
        templateUrl: '/templates/areas/posts/new-post.component.html',
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, services_1.PostService,
        router_1.Router, router_1.ActivatedRoute, app_config_1.AppConfig])
], NewPostComponent);
exports.NewPostComponent = NewPostComponent;
//# sourceMappingURL=new-post.component.js.map