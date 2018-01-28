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
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var services_1 = require("../../services");
var services_2 = require("../../../shared/services");
var app_config_1 = require("../../../../app.config");
var _ = require("lodash");
var MediaUploadComponent = (function () {
    function MediaUploadComponent(modalService, _renderer, _fileUploadService, _appConfig, _mediaService) {
        this.modalService = modalService;
        this._renderer = _renderer;
        this._fileUploadService = _fileUploadService;
        this._appConfig = _appConfig;
        this._mediaService = _mediaService;
        this.close = new core_1.EventEmitter();
        this.uploadFiles = new Array(0);
        this.selectedFiles = new Array(0);
    }
    MediaUploadComponent.prototype.OpenModel = function (content) {
        var _this = this;
        this.modalService.open(content, {
            backdrop: 'static',
            keyboard: true,
            windowClass: 'upload-modal'
        }).result.then(function (result) {
            if (_this.uploadFiles.length > 0) {
                _this.close.emit(true);
            }
            else {
                _this.close.emit(false);
            }
            _this.uploadFiles.length = 0;
            _this.selectedFiles.length = 0;
        }, function (reason) {
            if (_this.uploadFiles.length > 0) {
                _this.close.emit(true);
            }
            else {
                _this.close.emit(false);
            }
            _this.uploadFiles.length = 0;
            _this.selectedFiles.length = 0;
        });
    };
    MediaUploadComponent.prototype.BrowseFile = function () {
        var event = new MouseEvent('click', { bubbles: true });
        event.stopPropagation();
        this._renderer.invokeElementMethod(this.fileInput.nativeElement, 'dispatchEvent', [event]);
    };
    MediaUploadComponent.prototype.Upload = function (event) {
        var _this = this;
        console.log(this.fileInput);
        var files = event.srcElement.files;
        var _loop_1 = function (i) {
            var file = {
                id: 0,
                path: '/images/common_file.png',
                fileName: files[i].name,
                isProgress: true,
                progressValue: 0.0
            };
            this_1.uploadFiles.push(file);
            this_1._fileUploadService.UploadXHR(files[i], function (progress) {
                file.progressValue = parseFloat(parseFloat(progress).toFixed(0));
            }, function (complete) {
                file.isProgress = false;
                var res = JSON.parse(complete);
                file.id = res.files[0].id;
                file.fileName = res.files[0].fileName;
                file.fileType = res.files[0].fileType;
                switch (res.files[0].fileType) {
                    case 'Image':
                        file.path = _this._appConfig.GetBaseApiUrl() + "/FileHandler/" + file.id + "/" + file.fileName;
                        break;
                    case 'PDF':
                        file.path = '/images/file_icons/pdf.png';
                        break;
                    case 'Word':
                        file.path = '/images/file_icons/word.png';
                        break;
                    case 'Excel':
                        file.path = '/images/file_icons/excel.png';
                        break;
                    case 'PowerPoint':
                        file.path = '/images/file_icons/powerpoint.png';
                        break;
                    case 'Audio':
                        file.path = '/images/file_icons/audio.png';
                        break;
                    case 'Video':
                        file.path = '/images/file_icons/video.png';
                        break;
                    default:
                        file.path = '/images/common_file.png';
                        break;
                }
            }, function (error) { return console.log(error); });
        };
        var this_1 = this;
        for (var i = 0; i < files.length; i++) {
            _loop_1(i);
        }
        this.fileInput.nativeElement.value = "";
    };
    MediaUploadComponent.prototype.Select = function (file) {
        if (file.selected) {
            file.selected = false;
            _.remove(this.selectedFiles, function (i) { return i.fileName == file.fileName; });
        }
        else {
            file.selected = true;
            this.selectedFiles.push(file);
        }
    };
    MediaUploadComponent.prototype.Delete = function () {
        var _this = this;
        this.selectedFiles.forEach(function (file) {
            _this._mediaService.Delete(file.id).subscribe(null, function (err) { return console.log(err); }, function () {
                _.remove(_this.uploadFiles, function (f) { return f.id == file.id; });
            });
        });
        this.selectedFiles.length = 0;
    };
    MediaUploadComponent.prototype.DeleteAll = function () {
        var _this = this;
        this.uploadFiles.forEach(function (file) {
            _this._mediaService.Delete(file.id).subscribe(function (res) { return console.log(res); });
        });
        this.uploadFiles.length = 0;
    };
    return MediaUploadComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], MediaUploadComponent.prototype, "close", void 0);
__decorate([
    core_1.ViewChild('fileInput'),
    __metadata("design:type", core_1.ElementRef)
], MediaUploadComponent.prototype, "fileInput", void 0);
MediaUploadComponent = __decorate([
    core_1.Component({
        selector: 'media-upload',
        templateUrl: 'templates/areas/media/media-upload.component.html',
        encapsulation: core_1.ViewEncapsulation.None,
        styles: ["\n             .upload-modal {\n        \n    }\n\n        .upload-modal .modal-dialog {\n        max-width:1000px;\n    }\n\n   \n   \n        "]
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal, core_1.Renderer,
        services_2.FileUploadService, app_config_1.AppConfig,
        services_1.MediaService])
], MediaUploadComponent);
exports.MediaUploadComponent = MediaUploadComponent;
//# sourceMappingURL=media-upload.component.js.map