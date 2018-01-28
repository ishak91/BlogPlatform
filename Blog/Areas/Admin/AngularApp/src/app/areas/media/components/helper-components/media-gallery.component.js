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
var app_config_1 = require("../../../../app.config");
var _ = require("lodash");
var MediaGalleryComponent = (function () {
    function MediaGalleryComponent(_appConfig) {
        this._appConfig = _appConfig;
        this.select = new core_1.EventEmitter();
        this.selectedFiles = new Array();
    }
    MediaGalleryComponent.prototype.ngOnInit = function () {
    };
    MediaGalleryComponent.prototype.Select = function (file) {
        if (file.selected) {
            file.selected = false;
            _.remove(this.selectedFiles, function (i) { return i.id == file.id; });
        }
        else {
            file.selected = true;
            this.selectedFiles.push(file);
        }
        this.select.emit(this.selectedFiles);
    };
    MediaGalleryComponent.prototype.GetThumbnail = function (file) {
        var path = "";
        switch (file.fileType) {
            case 'Image':
                path = this._appConfig.GetBaseApiUrl() + "/FileHandler/" + file.id + "/" + file.fileName;
                break;
            case 'PDF':
                path = '/images/file_icons/pdf.png';
                break;
            case 'Word':
                path = '/images/file_icons/word.png';
                break;
            case 'Excel':
                path = '/images/file_icons/excel.png';
                break;
            case 'PowerPoint':
                path = '/images/file_icons/powerpoint.png';
                break;
            case 'Audio':
                path = '/images/file_icons/audio.png';
                break;
            case 'Video':
                path = '/images/file_icons/video.png';
                break;
            default:
                path = '/images/common_file.png';
                break;
        }
        return path;
    };
    return MediaGalleryComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], MediaGalleryComponent.prototype, "select", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], MediaGalleryComponent.prototype, "files", void 0);
MediaGalleryComponent = __decorate([
    core_1.Component({
        selector: 'media-gallery',
        templateUrl: 'templates/areas/media/media-gallery.component.html',
        styleUrls: ['css/media.css']
    }),
    __metadata("design:paramtypes", [app_config_1.AppConfig])
], MediaGalleryComponent);
exports.MediaGalleryComponent = MediaGalleryComponent;
//# sourceMappingURL=media-gallery.component.js.map