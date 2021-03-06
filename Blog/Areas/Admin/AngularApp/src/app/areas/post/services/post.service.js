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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var PostService = (function () {
    function PostService(_http) {
        this._http = _http;
        this.url = "http://localhost:5000/api/Post";
    }
    PostService.prototype.CreateNewPost = function (post) {
        return this._http.post(this.url, post).map(function (res) { return res.json(); });
    };
    PostService.prototype.GetAllPosts = function () {
        return this._http.get(this.url).map(function (res) { return res.json(); });
    };
    PostService.prototype.GetPost = function (id) {
        return this._http.get(this.url + "/" + id).map(function (res) { return res.json(); });
    };
    PostService.prototype.DeletePost = function (id) {
        return this._http.delete(this.url + "/" + id).map(function (res) { return res.json(); });
    };
    return PostService;
}());
PostService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PostService);
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map