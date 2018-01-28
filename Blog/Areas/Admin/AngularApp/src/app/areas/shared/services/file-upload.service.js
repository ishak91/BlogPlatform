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
var FileUploadService = (function () {
    function FileUploadService(_http, appConfig) {
        this._http = _http;
        this.appConfig = appConfig;
    }
    FileUploadService.prototype.UploadXHR = function (file, progress, complete, error) {
        var url = this.appConfig.GetBaseApiUrl() + '/FileHandler';
        var xhr = new XMLHttpRequest();
        if (file != null) {
            xhr.addEventListener('load', function (e) {
                if (xhr.readyState == 4 && xhr.status == 200)
                    complete(xhr.response);
            });
            xhr.upload.addEventListener('progress', function (e) {
                if (e.lengthComputable) {
                    var value = (e.loaded / e.total) * 100;
                    progress(value.toFixed(2));
                }
            });
            xhr.open('POST', url);
            var postData = new FormData();
            postData.append('files', file, file.name);
            xhr.send(postData);
        }
        else {
            error("No Files to Upload");
            console.error("No File to Upload");
        }
    };
    return FileUploadService;
}());
FileUploadService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, app_config_1.AppConfig])
], FileUploadService);
exports.FileUploadService = FileUploadService;
//# sourceMappingURL=file-upload.service.js.map