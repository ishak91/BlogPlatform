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
var router_1 = require("@angular/router");
var services_1 = require("../services");
var ListPostComponent = (function () {
    function ListPostComponent(_router, _activatedRoute, _postService) {
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this._postService = _postService;
    }
    ListPostComponent.prototype.Edit = function (post) {
        var id = post.id;
        this._router.navigate(['../', id, { title: post.postTitle }], { relativeTo: this._activatedRoute });
    };
    ListPostComponent.prototype.Delete = function (post) {
        var _this = this;
        var userConfim = confirm("Are you sure?");
        if (userConfim) {
            this._postService.DeletePost(post.id).subscribe(function (res) {
                _this.posts = _this._postService.GetAllPosts();
            }, function (err) {
                console.log(err);
                alert("Unable to Delete");
            });
        }
    };
    ListPostComponent.prototype.ngOnInit = function () {
        this.GetAllPost();
    };
    ListPostComponent.prototype.GetAllPost = function () {
        this.posts = this._postService.GetAllPosts();
    };
    return ListPostComponent;
}());
ListPostComponent = __decorate([
    core_1.Component({
        selector: 'list-post',
        templateUrl: 'templates/areas/posts/list-post.component.html',
        styles: ["\n        .navbar {\n            background-color:#fff;   \n            margin-bottom:0.5rem; \n        }\n       \n    "]
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, services_1.PostService])
], ListPostComponent);
exports.ListPostComponent = ListPostComponent;
//# sourceMappingURL=list-post.component.js.map