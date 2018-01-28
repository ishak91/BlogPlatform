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
var app_config_1 = require("../../../app.config");
var MediaService = (function () {
    function MediaService(_http, _appConfig) {
        this._http = _http;
        this._appConfig = _appConfig;
        this.url = "/media";
        this.Init();
    }
    MediaService.prototype.Init = function () {
        this.url = this._appConfig.GetBaseApiUrl() + this.url;
    };
    MediaService.prototype.GetAll = function () {
        return this._http.get(this.url).map(function (res) { return res.json(); });
    };
    MediaService.prototype.Delete = function (id) {
        return this._http.delete(this.url + "/" + id);
    };
    MediaService.prototype.GetByType = function (type) {
        return this._http.get(this.url + "/filetype/" + type).map(function (res) { return res.json(); });
    };
    MediaService.prototype.GetById = function (id) {
        return this._http.get(this.url + "/id/" + id).map(function (res) { return res.json(); });
    };
    MediaService.prototype.GetByFileName = function (fileName) {
        return this._http.get(this.url + "/filetype/" + fileName).map(function (res) { return res.json(); });
    };
    return MediaService;
}());
MediaService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, app_config_1.AppConfig])
], MediaService);
exports.MediaService = MediaService;
//# sourceMappingURL=media.service.js.map