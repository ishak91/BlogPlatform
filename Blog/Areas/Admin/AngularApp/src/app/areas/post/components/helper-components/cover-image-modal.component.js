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
var app_config_1 = require("../../../../app.config");
var services_1 = require("../../../media/services");
var CoverImageModalComponent = (function () {
    function CoverImageModalComponent(_modalService, _mediaService, _appConfig) {
        this._modalService = _modalService;
        this._mediaService = _mediaService;
        this._appConfig = _appConfig;
        this.selectedFile = { id: 0 };
        this.setcover = new core_1.EventEmitter();
    }
    CoverImageModalComponent.prototype.ngOnInit = function () {
        this.allFiles = this._mediaService.GetByType("image");
    };
    CoverImageModalComponent.prototype.OpenModel = function (content) {
        this.ngbModalRef = this._modalService.open(content, {
            backdrop: 'static',
            keyboard: true,
            windowClass: 'upload-modal',
            size: 'lg',
        });
        this.ngbModalRef.result.then(function (result) {
            console.log("result");
        }, function (reason) {
            console.log("reason");
        });
    };
    CoverImageModalComponent.prototype.Select = function (file) {
        this.selectedFile = file;
    };
    CoverImageModalComponent.prototype.GetImagePath = function (file) {
        return this._appConfig.GetBaseApiUrl() + "/FileHandler/" + file.id + "/" + file.fileName;
    };
    CoverImageModalComponent.prototype.SetCoverImage = function () {
        this.setcover.emit(this.selectedFile);
        this.ngbModalRef.close();
    };
    return CoverImageModalComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CoverImageModalComponent.prototype, "setcover", void 0);
CoverImageModalComponent = __decorate([
    core_1.Component({
        selector: 'cover-image',
        templateUrl: '/templates/areas/posts/cover-image-modal.component.html',
        providers: [services_1.MediaService]
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal, services_1.MediaService, app_config_1.AppConfig])
], CoverImageModalComponent);
exports.CoverImageModalComponent = CoverImageModalComponent;
//# sourceMappingURL=cover-image-modal.component.js.map