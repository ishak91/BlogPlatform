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
var services_1 = require("../services");
var AllMediaComponent = (function () {
    function AllMediaComponent(_mediaService) {
        this._mediaService = _mediaService;
    }
    AllMediaComponent.prototype.ngOnInit = function () {
        this.SyncMedia();
    };
    AllMediaComponent.prototype.Select = function (files) {
        console.log(files);
    };
    AllMediaComponent.prototype.SyncMedia = function () {
        this.allFiles = this._mediaService.GetAll();
    };
    AllMediaComponent.prototype.UploadModelClose = function (value) {
        if (value)
            this.SyncMedia();
    };
    return AllMediaComponent;
}());
AllMediaComponent = __decorate([
    core_1.Component({
        selector: 'all-media',
        templateUrl: 'templates/areas/media/all-media.component.html',
    }),
    __metadata("design:paramtypes", [services_1.MediaService])
], AllMediaComponent);
exports.AllMediaComponent = AllMediaComponent;
//# sourceMappingURL=all-media.component.js.map