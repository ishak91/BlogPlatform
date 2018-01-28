webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var dashboard_component_1 = __webpack_require__("../../../../../src/app/areas/dashboard/dashboard.component.ts");
var appRoutes = [
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(appRoutes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header-layout></header-layout>\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <sidebar-menu></sidebar-menu>\r\n        <main class=\"col-md-9 ml-sm-auto col-lg-10 pt-3 px-4\">\r\n          <router-outlet></router-outlet>\r\n        </main>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'admin-app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.config.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AppConfig = /** @class */ (function () {
    function AppConfig() {
        this._baseApiUrl = "http://localhost:5000/api";
    }
    AppConfig.prototype.GetBaseApiUrl = function () {
        return this._baseApiUrl;
    };
    AppConfig = __decorate([
        core_1.Injectable()
    ], AppConfig);
    return AppConfig;
}());
exports.AppConfig = AppConfig;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var ng_bootstrap_1 = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
//Components
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var dashboard_component_1 = __webpack_require__("../../../../../src/app/areas/dashboard/dashboard.component.ts");
//App Modules
var layout_1 = __webpack_require__("../../../../../src/app/layout/index.ts");
var post_1 = __webpack_require__("../../../../../src/app/areas/post/index.ts");
var user_1 = __webpack_require__("../../../../../src/app/areas/user/index.ts");
var media_1 = __webpack_require__("../../../../../src/app/areas/media/index.ts");
var shared_1 = __webpack_require__("../../../../../src/app/areas/shared/index.ts");
var auth_1 = __webpack_require__("../../../../../src/app/auth/index.ts");
//App Routing
var app_routing_module_1 = __webpack_require__("../../../../../src/app/app-routing.module.ts");
//App Config
var app_config_1 = __webpack_require__("../../../../../src/app/app.config.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, ng_bootstrap_1.NgbModule.forRoot(), layout_1.LayoutModule,
                post_1.PostModule, app_routing_module_1.AppRoutingModule, user_1.UserModule, media_1.MediaModule, shared_1.SharedModule,
                auth_1.AuthModule],
            declarations: [app_component_1.AppComponent, dashboard_component_1.DashboardComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [app_config_1.AppConfig]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/areas/dashboard/dashboard.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent = __decorate([
        core_1.Component({
            template: '<h1>Dashboard</h1>'
        })
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;


/***/ }),

/***/ "../../../../../src/app/areas/media/components/all-media.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n        <div class=\"action-bar\">\r\n            <media-upload (close)=\"UploadModelClose($event)\"></media-upload>\r\n        </div>\r\n    </div>\r\n    <media-gallery (select)=\"Select($event)\" [files]=\"allFiles | async\"></media-gallery>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/areas/media/components/all-media.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var services_1 = __webpack_require__("../../../../../src/app/areas/media/services/index.ts");
var AllMediaComponent = /** @class */ (function () {
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
    AllMediaComponent = __decorate([
        core_1.Component({
            selector: 'all-media',
            template: __webpack_require__("../../../../../src/app/areas/media/components/all-media.component.html"),
        }),
        __metadata("design:paramtypes", [services_1.MediaService])
    ], AllMediaComponent);
    return AllMediaComponent;
}());
exports.AllMediaComponent = AllMediaComponent;


/***/ }),

/***/ "../../../../../src/app/areas/media/components/helper-components/media-gallery.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".media {\r\n}\r\n\r\n    .media > div {\r\n        padding:5px;\r\n    }\r\n\r\n    .media-item {\r\n    padding: 5px;\r\n    border: 1px solid #fff;\r\n}\r\n\r\n    .media-item img {\r\n        max-width: 100%;\r\n        height: 6rem;\r\n    }\r\n\r\n    .media-item:hover {\r\n        background: #eaeaea;\r\n    }\r\n\r\n    .media-item-select {\r\n     border: 1px solid #1c8dee;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/areas/media/components/helper-components/media-gallery.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row col-lg-12\">\r\n    <div class=\"card card-block\">\r\n        <div class=\"row col-lg-12 media\">\r\n            <div class=\"col-lg-2\" *ngFor=\"let item of files; let i=index\" (click)=\"Select(item)\"  title=\"{{item.fileName}}\">\r\n                <div class=\"media-item\" [ngClass]=\"{'media-item-select':item.selected}\" >\r\n                    <img [src]=\"GetThumbnail(item)\" />\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>  "

/***/ }),

/***/ "../../../../../src/app/areas/media/components/helper-components/media-gallery.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var app_config_1 = __webpack_require__("../../../../../src/app/app.config.ts");
var _ = __webpack_require__("../../../../lodash/lodash.js");
var MediaGalleryComponent = /** @class */ (function () {
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
            template: __webpack_require__("../../../../../src/app/areas/media/components/helper-components/media-gallery.component.html"),
            styles: [__webpack_require__("../../../../../src/app/areas/media/components/helper-components/media-gallery.component.css")]
        }),
        __metadata("design:paramtypes", [app_config_1.AppConfig])
    ], MediaGalleryComponent);
    return MediaGalleryComponent;
}());
exports.MediaGalleryComponent = MediaGalleryComponent;


/***/ }),

/***/ "../../../../../src/app/areas/media/components/helper-components/media-upload.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-header {\r\n  padding: 10px;\r\n}\r\n\r\n.modal-footer {\r\n  padding: 10px;\r\n}\r\n\r\n.upload {\r\n}\r\n\r\n.upload > div {\r\n    padding: 5px;\r\n  }\r\n\r\n.upload-item {\r\n  padding: 5px;\r\n  border: 1px solid #fff;\r\n}\r\n\r\n.upload-item img {\r\n    max-width: 100%;\r\n    height: 6rem;\r\n    margin-left: 15px;\r\n  }\r\n\r\n.upload-item:hover {\r\n    background: #eaeaea;\r\n  }\r\n\r\n.upload-item-percentage {\r\n  position: absolute;\r\n  margin: 0;\r\n  top: 50px;\r\n  left: 50px;\r\n  color: #fff;\r\n  font-weight: 700;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.upload-item-select {\r\n  border: 1px solid #1c8dee;\r\n}\r\n\r\n.upload-modal {\r\n}\r\n\r\n.upload-modal .modal-dialog {\r\n    max-width: 1000px;\r\n  }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/areas/media/components/helper-components/media-upload.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<ng-template ngbModalContainer #content let-c=\"close\" let-d=\"dismiss\">\r\n\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Upload Media Files</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class=\"container-fluid\">\r\n\r\n      <div class=\"row col-lg-12\">\r\n        <button class=\"btn btn-primary\" (click)=\"BrowseFile()\">Browse Files</button>\r\n        <button class=\"btn btn-outline-primary\" *ngIf=\"uploadFiles.length > 0\" (click)=\"DeleteAll()\">Delete All</button>\r\n        <button class=\"btn btn-outline-primary\" *ngIf=\"selectedFiles.length > 0\" (click)=\"Delete()\">Delete</button>\r\n\r\n      </div>\r\n\r\n      <div class=\"row col-lg-12 upload\">\r\n        <div class=\"col-lg-2\" *ngFor=\"let file of uploadFiles\">\r\n          <div class=\"upload-item\" *ngIf=\"file.isProgress\">\r\n            <img src=\"/images/common_file.png\" />\r\n            <label class=\"upload-item-percentage\">{{file.progressValue}}%</label>\r\n          </div>\r\n          <div class=\"upload-item\" *ngIf=\"!file.isProgress\" title=\"{{file.fileName}}\" (click)=\"Select(file)\" [ngClass]=\"{'upload-item-select':file.selected}\">\r\n            <img [style.margin-left]=\"file.fileType=='Image' ? '0':'15px'\" src=\"{{file.path}}\" />\r\n          </div>\r\n        </div>\r\n\r\n\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\r\n  </div>\r\n</ng-template>\r\n<button class=\"btn btn-primary\" (click)=\"OpenModel(content)\">Upload</button>\r\n<input #fileInput type=\"file\" style=\"display:none;\" id=\"fileInput\" (change)=\"Upload($event)\" multiple />\r\n"

/***/ }),

/***/ "../../../../../src/app/areas/media/components/helper-components/media-upload.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ng_bootstrap_1 = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var services_1 = __webpack_require__("../../../../../src/app/areas/media/services/index.ts");
var services_2 = __webpack_require__("../../../../../src/app/areas/shared/services/index.ts");
var app_config_1 = __webpack_require__("../../../../../src/app/app.config.ts");
var _ = __webpack_require__("../../../../lodash/lodash.js");
var MediaUploadComponent = /** @class */ (function () {
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
        //let event = new MouseEvent('click', { bubbles: true });
        //event.stopPropagation();
        //this._renderer.invokeElementMethod(
        //  this.fileInput.nativeElement, 'dispatchEvent', [event]);
        console.log(this.fileInput);
        //  var el = this.fileInput.nativeElement as HTMLElement;
        //  el.click();
        this.fileInput.nativeElement.click();
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
            template: __webpack_require__("../../../../../src/app/areas/media/components/helper-components/media-upload.component.html"),
            encapsulation: core_1.ViewEncapsulation.None,
            styles: [__webpack_require__("../../../../../src/app/areas/media/components/helper-components/media-upload.component.css")]
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal, core_1.Renderer,
            services_2.FileUploadService, app_config_1.AppConfig,
            services_1.MediaService])
    ], MediaUploadComponent);
    return MediaUploadComponent;
}());
exports.MediaUploadComponent = MediaUploadComponent;


/***/ }),

/***/ "../../../../../src/app/areas/media/components/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../../../../../src/app/areas/media/components/media.component.ts"));
__export(__webpack_require__("../../../../../src/app/areas/media/components/all-media.component.ts"));
__export(__webpack_require__("../../../../../src/app/areas/media/components/view-media.component.ts"));
__export(__webpack_require__("../../../../../src/app/areas/media/components/helper-components/media-gallery.component.ts"));
__export(__webpack_require__("../../../../../src/app/areas/media/components/helper-components/media-upload.component.ts"));


/***/ }),

/***/ "../../../../../src/app/areas/media/components/media.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var MediaComponent = /** @class */ (function () {
    function MediaComponent() {
    }
    MediaComponent = __decorate([
        core_1.Component({
            selector: 'media',
            template: "<router-outlet></router-outlet>",
        })
    ], MediaComponent);
    return MediaComponent;
}());
exports.MediaComponent = MediaComponent;


/***/ }),

/***/ "../../../../../src/app/areas/media/components/view-media.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>View Media</h1>"

/***/ }),

/***/ "../../../../../src/app/areas/media/components/view-media.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ViewMediaComponent = /** @class */ (function () {
    function ViewMediaComponent() {
    }
    ViewMediaComponent = __decorate([
        core_1.Component({
            selector: 'view-media',
            template: __webpack_require__("../../../../../src/app/areas/media/components/view-media.component.html")
        })
    ], ViewMediaComponent);
    return ViewMediaComponent;
}());
exports.ViewMediaComponent = ViewMediaComponent;


/***/ }),

/***/ "../../../../../src/app/areas/media/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../../../../../src/app/areas/media/media.module.ts"));


/***/ }),

/***/ "../../../../../src/app/areas/media/media-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var components_1 = __webpack_require__("../../../../../src/app/areas/media/components/index.ts");
var mediaRoutes = [
    {
        path: 'media',
        component: components_1.MediaComponent,
        children: [
            {
                path: '',
                redirectTo: 'all',
                pathMatch: 'full'
            },
            {
                path: 'all',
                component: components_1.AllMediaComponent
            },
            {
                path: ':id',
                component: components_1.ViewMediaComponent
            }
        ]
    }
];
var MediaRoutingModule = /** @class */ (function () {
    function MediaRoutingModule() {
    }
    MediaRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(mediaRoutes)],
            exports: [router_1.RouterModule]
        })
    ], MediaRoutingModule);
    return MediaRoutingModule;
}());
exports.MediaRoutingModule = MediaRoutingModule;


/***/ }),

/***/ "../../../../../src/app/areas/media/media.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var ng_bootstrap_1 = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var components_1 = __webpack_require__("../../../../../src/app/areas/media/components/index.ts");
var services_1 = __webpack_require__("../../../../../src/app/areas/media/services/index.ts");
var media_routing_module_1 = __webpack_require__("../../../../../src/app/areas/media/media-routing.module.ts");
var shared_1 = __webpack_require__("../../../../../src/app/areas/shared/index.ts");
var MediaModule = /** @class */ (function () {
    function MediaModule() {
    }
    MediaModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, media_routing_module_1.MediaRoutingModule, ng_bootstrap_1.NgbModalModule, shared_1.SharedModule],
            declarations: [components_1.AllMediaComponent, components_1.MediaComponent, components_1.ViewMediaComponent, components_1.MediaGalleryComponent, components_1.MediaUploadComponent],
            providers: [services_1.MediaService],
            exports: []
        })
    ], MediaModule);
    return MediaModule;
}());
exports.MediaModule = MediaModule;


/***/ }),

/***/ "../../../../../src/app/areas/media/services/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../../../../../src/app/areas/media/services/media.service.ts"));


/***/ }),

/***/ "../../../../../src/app/areas/media/services/media.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var app_config_1 = __webpack_require__("../../../../../src/app/app.config.ts");
var MediaService = /** @class */ (function () {
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
    MediaService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, app_config_1.AppConfig])
    ], MediaService);
    return MediaService;
}());
exports.MediaService = MediaService;


/***/ }),

/***/ "../../../../../src/app/areas/post/components/helper-components/cover-image-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<style>\r\n  .modal-header {\r\n    padding: 10px;\r\n  }\r\n\r\n  .modal-footer {\r\n    padding: 10px;\r\n  }\r\n\r\n  .cover {\r\n  }\r\n\r\n    .cover > div {\r\n      padding: 5px;\r\n    }\r\n\r\n  .cover-item {\r\n    padding: 5px;\r\n    border: 1px solid #fff;\r\n  }\r\n\r\n    .cover-item img {\r\n      max-width: 100%;\r\n      height: 7rem;\r\n    }\r\n\r\n    .cover-item:hover {\r\n      background: #eaeaea;\r\n    }\r\n\r\n\r\n  .cover-item-select {\r\n    border: 1px solid #1c8dee;\r\n  }\r\n</style>\r\n\r\n\r\n<!--<div class=\"row col-lg-12\">\r\n    <div class=\"card card-block\">\r\n        <div class=\"row col-lg-12 media\">\r\n            <div class=\"col-lg-2\" *ngFor=\"let item of files; let i=index\" (click)=\"Select(item)\" title=\"{{item.fileName}}\">\r\n                <div class=\"media-item\" [ngClass]=\"{'media-item-select':item.selected}\">\r\n                    <img [src]=\"GetThumbnail(item)\" />\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>-->\r\n\r\n<ng-template ngbModalContainer #content let-c=\"close\" let-d=\"dismiss\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\">Select Cover Image</h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"container-fluid\">\r\n\r\n\r\n            <div class=\"row col-lg-12 cover\">\r\n              <div class=\"col-lg-3\" *ngFor=\"let file of allFiles|async; let i = index\">\r\n                <div class=\"cover-item\" title=\"{{file.fileName}}\" (click)=\"Select(file)\" [ngClass]=\"{'cover-item-select':file.id==selectedFile.id}\">\r\n                  <img [src]=\"GetImagePath(file)\" />\r\n                </div>\r\n              </div>\r\n              <!--<div class=\"col-lg-3\">\r\n                  <div class=\"cover-item\" >\r\n                      <img src=\"/images/dubai-marina-view-1920x1080-wallpaper-18532.jpg\" />\r\n                  </div>\r\n              </div>-->\r\n\r\n\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"SetCoverImage()\">Set Cover Image</button>\r\n          <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"c('Close click')\">Close</button>\r\n        </div>\r\n   \r\n\r\n\r\n\r\n</ng-template>\r\n<button class=\"btn btn-outline-primary btn-sm\" (click)=\"OpenModel(content)\">Select Cover Image</button>\r\n\r\n\r\n<!--<div class=\"modal-header\">\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n  <h5 class=\"modal-title\">Select Cover Image</h5>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"container-fluid\">\r\n\r\n\r\n    <div class=\"row col-lg-12 cover\">\r\n      <div class=\"col-lg-3\" *ngFor=\"let file of allFiles|async; let i = index\">\r\n        <div class=\"cover-item\" title=\"{{file.fileName}}\" (click)=\"Select(file)\" [ngClass]=\"{'cover-item-select':file.id==selectedFile.id}\">\r\n          <img [src]=\"GetImagePath(file)\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3\">\r\n          <div class=\"cover-item\" >\r\n              <img src=\"/images/dubai-marina-view-1920x1080-wallpaper-18532.jpg\" />\r\n          </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"SetCoverImage()\">Set Cover Image</button>\r\n  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\r\n</div>-->\r\n"

/***/ }),

/***/ "../../../../../src/app/areas/post/components/helper-components/cover-image-modal.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ng_bootstrap_1 = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var app_config_1 = __webpack_require__("../../../../../src/app/app.config.ts");
var services_1 = __webpack_require__("../../../../../src/app/areas/media/services/index.ts");
var CoverImageModalComponent = /** @class */ (function () {
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
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], CoverImageModalComponent.prototype, "setcover", void 0);
    CoverImageModalComponent = __decorate([
        core_1.Component({
            selector: 'cover-image',
            template: __webpack_require__("../../../../../src/app/areas/post/components/helper-components/cover-image-modal.component.html"),
            providers: [services_1.MediaService]
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal, services_1.MediaService, app_config_1.AppConfig])
    ], CoverImageModalComponent);
    return CoverImageModalComponent;
}());
exports.CoverImageModalComponent = CoverImageModalComponent;


/***/ }),

/***/ "../../../../../src/app/areas/post/components/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../../../../../src/app/areas/post/components/list-post.component.ts"));
__export(__webpack_require__("../../../../../src/app/areas/post/components/new-post.component.ts"));
__export(__webpack_require__("../../../../../src/app/areas/post/components/view-post.component.ts"));
__export(__webpack_require__("../../../../../src/app/areas/post/components/post.component.ts"));
__export(__webpack_require__("../../../../../src/app/areas/post/components/helper-components/cover-image-modal.component.ts"));


/***/ }),

/***/ "../../../../../src/app/areas/post/components/list-post.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"row col-lg-12\">\r\n        <nav class=\"action-bar\">\r\n            <button class=\"btn btn-primary action-bar-item\" routerLink=\"../new\">New Post</button>\r\n        </nav>\r\n    </div>\r\n\r\n  <div class=\"row col-lg-12\">\r\n        <div class=\"card w-100\">\r\n          <div class=\"card-body\">\r\n            <div class=\"list-group\">\r\n              <div *ngFor=\"let post of posts |async\" class=\"list-group-item d-flex\">\r\n                <div class=\"col-lg-4\"><label class=\"\">{{post.postTitle}}</label> </div>\r\n                <div class=\"col-lg-4\"> <label class=\"\">{{post.postStatus}}</label> </div>\r\n                <div class=\"col-lg-4 d-inline-flex\">\r\n                  <div class=\"col-lg-6 \">\r\n                    <button class=\"btn btn-outline-primary btn-block btn-sm\" (click)=\"Edit(post)\">Edit</button>\r\n                  </div>\r\n                  <div class=\"col-lg-6\">\r\n                    <button class=\"btn btn-outline-primary btn-block btn-sm\" (click)=\"Delete(post)\">Delete</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/areas/post/components/list-post.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var Observable_1 = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
__webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
var services_1 = __webpack_require__("../../../../../src/app/areas/post/services/index.ts");
var ListPostComponent = /** @class */ (function () {
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
        var posts = [{
                postTitle: "Test1",
                id: 10,
                postStatus: "Public"
            }, {
                postTitle: "Test2",
                id: 10,
                postStatus: "Public"
            }, {
                postTitle: "Test3",
                id: 10,
                postStatus: "Public"
            }];
        this.posts = Observable_1.Observable.of(posts); //this._postService.GetAllPosts(); 
    };
    ListPostComponent = __decorate([
        core_1.Component({
            selector: 'list-post',
            template: __webpack_require__("../../../../../src/app/areas/post/components/list-post.component.html"),
            styles: ["\n       \n    "]
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, services_1.PostService])
    ], ListPostComponent);
    return ListPostComponent;
}());
exports.ListPostComponent = ListPostComponent;


/***/ }),

/***/ "../../../../../src/app/areas/post/components/new-post.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<form [formGroup]=\"postForm\">\r\n\r\n    <input type=\"hidden\" name=\"postId\" formControlName=\"id\" />\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-8\">\r\n        <div class=\"card card-body mb-3\">\r\n       \r\n\r\n            <div class=\"form-group\">\r\n              <label class=\"form-control-label\">Title<span class=\"asterisk\">*</span></label>\r\n              <input type=\"text\" value=\"\" class=\"form-control\" formControlName=\"postTitle\" (change)=\"GeneratePermerlink()\" />\r\n              <small *ngIf=\"postForm.controls.postTitle.touched && !postForm.controls.postTitle.valid\" class=\"text-danger\">Title cannot be blank</small>\r\n              <br /> \r\n              <div class=\"form-inline\">\r\n\r\n                <label>Permerlink: http://www.{{domainName}}/</label> <label *ngIf=\"!permerlinkEditStauts\">{{urlString}}</label>\r\n                <input type=\"text\" class=\"form-control\" *ngIf=\"permerlinkEditStauts\" formControlName=\"permerlink\" />\r\n                <button class=\"btn btn-link btn-sm\" (click)=\"EditPermerlink()\" [disabled]=\"postForm.controls.permerlink.touched && !postForm.controls.permerlink.valid\">{{permerlinkBtnText}}</button>\r\n                <br />\r\n                <small *ngIf=\"postForm.controls.permerlink.touched && !postForm.controls.permerlink.valid\" class=\"text-danger\">Permerlink cannot be blank</small>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <textarea rows=\"10\" class=\"form-control\" formControlName=\"content\"></textarea>\r\n            </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-lg-4\">\r\n        \r\n\r\n       \r\n        <div class=\"card card-body mb-3\">\r\n          <div class=\"row\">\r\n              <label class=\"col-sm-12\">Stauts: Draft</label>\r\n              <label class=\"col-sm-12\">Auto Save : Enabled</label>\r\n        \r\n          </div>\r\n          <div class=\"row\">\r\n           \r\n              <div class=\"col-sm-3\">\r\n\r\n                <div ngbDropdown class=\"btn-group\" dropdown>\r\n                  <button id=\"split-button\" type=\"button\" class=\"btn btn-outline-primary\" (click)=\"Save()\" [disabled]=\"!postForm.valid\">Save</button>\r\n                  <button type=\"button\" class=\"btn  btn-outline-primary dropdown-toggle-split\" ngbDropdownToggle>\r\n                    <span class=\"caret\"></span>\r\n                    <span class=\"sr-only\">Split button!</span>\r\n                  </button>\r\n                  <ul class=\"dropdown-menu col-lg-2\" ngbDropdownMenu role=\"menu\" aria-labelledby=\"split-button\">\r\n                    <li role=\"menuitem\"><button class=\"dropdown-item btn btn-link\" (click)=\"SaveClose()\" [disabled]=\"!postForm.valid\">Save & Close</button></li>\r\n                    <li role=\"menuitem\"><a class=\"dropdown-item  btn btn-link\" (click)=\"Close()\">Close</a></li>\r\n\r\n                  </ul>\r\n                </div>\r\n                <!--   <button class=\"btn btn-outline-primary btn-block\" (click)=\"Save()\" [disabled]=\"!postForm.valid\">Save</button>-->\r\n              </div>\r\n\r\n              <div class=\"col-sm-6\">\r\n                <button class=\"btn btn-primary btn-block\" (click)=\"Publish()\" [disabled]=\"!postForm.valid\">Publish</button>\r\n              </div>\r\n          \r\n          </div>\r\n\r\n\r\n        </div>\r\n\r\n        <div class=\"card card-body\">\r\n          <cover-image (setcover)=\"SetCover($event)\"></cover-image>\r\n          <br /><br />\r\n          <div class=\"row\" *ngIf=\"coverImage!=null\">\r\n            <div class=\"col-lg-12\">\r\n              <a class=\"btn btn-sm btn-outline-primary btn-clear-cover pull-lg-right text-sm-right\" (click)=\"RemoveCoverImage()\">Remove</a>\r\n\r\n              <img style=\"width:100%;height:auto;\" [src]=\"GetCoverImage()\" />\r\n            </div>\r\n          </div>\r\n          <!--<div class=\"row\">\r\n          <div class=\"col-lg-12\">\r\n              <button class=\"btn btn-outline-primary btn-sm\">Select Cover Image</button>\r\n          </div>\r\n      </div>-->\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  \r\n</form>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/areas/post/components/new-post.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var app_config_1 = __webpack_require__("../../../../../src/app/app.config.ts");
var services_1 = __webpack_require__("../../../../../src/app/areas/post/services/index.ts");
var models_1 = __webpack_require__("../../../../../src/app/areas/post/models/index.ts");
var NewPostComponent = /** @class */ (function () {
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
    NewPostComponent = __decorate([
        core_1.Component({
            selector: 'new-post',
            template: __webpack_require__("../../../../../src/app/areas/post/components/new-post.component.html"),
            styles: ["\n    .btn-clear-cover {\n        margin-bottom:5px;\n    }\n\n"]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, services_1.PostService,
            router_1.Router, router_1.ActivatedRoute, app_config_1.AppConfig])
    ], NewPostComponent);
    return NewPostComponent;
}());
exports.NewPostComponent = NewPostComponent;


/***/ }),

/***/ "../../../../../src/app/areas/post/components/post.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var PostComponent = /** @class */ (function () {
    function PostComponent() {
    }
    PostComponent = __decorate([
        core_1.Component({
            selector: 'post',
            template: ' <router-outlet></router-outlet>'
        })
    ], PostComponent);
    return PostComponent;
}());
exports.PostComponent = PostComponent;


/***/ }),

/***/ "../../../../../src/app/areas/post/components/view-post.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<form [formGroup]=\"postForm\">\r\n\r\n  <input type=\"hidden\" name=\"postId\" formControlName=\"id\" />\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-8\">\r\n      <div class=\"card card-body\">\r\n        <div class=\"col-lg-12\">\r\n\r\n          <div class=\"form-group\">\r\n            <label class=\"form-control-label\">Title<span class=\"asterisk\">*</span></label>\r\n            <input type=\"text\" value=\"\" class=\"form-control\" formControlName=\"postTitle\" (change)=\"GeneratePermerlink()\" />\r\n            <small *ngIf=\"postForm.controls.postTitle.touched && !postForm.controls.postTitle.valid\" class=\"text-danger\">Title cannot be blank</small>\r\n            <br />\r\n            <div class=\"form-inline\">\r\n\r\n              <label>Permerlink: http://www.{{domainName}}/</label> <label *ngIf=\"!permerlinkEditStauts\">{{urlString}}</label>\r\n              <input type=\"text\" class=\"form-control\" *ngIf=\"permerlinkEditStauts\" formControlName=\"permerlink\" />\r\n              <button class=\"btn btn-link btn-sm\" (click)=\"EditPermerlink()\" [disabled]=\"postForm.controls.permerlink.touched && !postForm.controls.permerlink.valid\">{{permerlinkBtnText}}</button>\r\n              <br />\r\n              <small *ngIf=\"postForm.controls.permerlink.touched && !postForm.controls.permerlink.valid\" class=\"text-danger\">Permerlink cannot be blank</small>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <textarea rows=\"10\" class=\"form-control\" formControlName=\"content\"></textarea>\r\n          </div>\r\n\r\n\r\n\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-lg-4\">\r\n      <div class=\"card card-body mb-3\">\r\n        <div class=\"form-group row\">\r\n\r\n          <label for=\"postStatus\" class=\"col-sm-3 col-form-label\">Status :</label>\r\n\r\n          <div class=\"col-sm-4\">\r\n            <select class=\"form-control\" fromControlName=\"postStatus\">\r\n              <option value=\"1\">Draft</option>\r\n              <option value=\"2\">Publish</option>\r\n              <option value=\"3\">Private</option>\r\n              <option value=\"4\">Private</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n\r\n          <label class=\"col-sm-3\">Auto Save :</label> <label class=\"col-sm-9\">Enabled</label>\r\n\r\n        </div>\r\n        <hr />\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-3\">\r\n\r\n            <div ngbDropdown class=\"btn-group\" dropdown>\r\n              <button id=\"split-button\" type=\"button\" class=\"btn btn-outline-primary\" (click)=\"Save()\" [disabled]=\"!postForm.valid\">Save</button>\r\n              <button type=\"button\" class=\"btn  btn-outline-primary dropdown-toggle-split\" ngbDropdownToggle>\r\n                <span class=\"caret\"></span>\r\n                <span class=\"sr-only\">Split button!</span>\r\n              </button>\r\n              <ul class=\"dropdown-menu col-lg-2\" ngbDropdownMenu role=\"menu\" aria-labelledby=\"split-button\">\r\n                <li role=\"menuitem\"><button class=\"dropdown-item btn btn-link\" (click)=\"SaveClose()\" [disabled]=\"!postForm.valid\">Save & Close</button></li>\r\n                <li role=\"menuitem\"><a class=\"dropdown-item  btn btn-link\" (click)=\"Close()\">Close</a></li>\r\n\r\n              </ul>\r\n            </div>\r\n            <!--   <button class=\"btn btn-outline-primary btn-block\" (click)=\"Save()\" [disabled]=\"!postForm.valid\">Save</button>-->\r\n          </div>\r\n\r\n          <div class=\"col-sm-6\">\r\n            <button class=\"btn btn-primary btn-block\" (click)=\"Publish()\" *ngIf=\"postStauts!='Publish'\" [disabled]=\"!postForm.valid\">Publish</button>\r\n          </div>\r\n        </div>\r\n\r\n\r\n      </div>\r\n\r\n      <div class=\"card card-body\">\r\n        <cover-image (setcover)=\"SetCover($event)\"></cover-image>\r\n        <br /><br />\r\n        <div class=\"row\" *ngIf=\"coverImage!=null\">\r\n          <div class=\"col-lg-12\">\r\n            <a class=\"btn btn-sm btn-outline-primary btn-clear-cover pull-lg-right text-sm-right\" (click)=\"RemoveCoverImage()\">Remove</a>\r\n\r\n            <img style=\"width:100%;height:auto;\" [src]=\"GetCoverImage()\" />\r\n          </div>\r\n        </div>\r\n        <!--<div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n                <button class=\"btn btn-outline-primary btn-sm\">Select Cover Image</button>\r\n            </div>\r\n        </div>-->\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/areas/post/components/view-post.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var app_config_1 = __webpack_require__("../../../../../src/app/app.config.ts");
var services_1 = __webpack_require__("../../../../../src/app/areas/post/services/index.ts");
var models_1 = __webpack_require__("../../../../../src/app/areas/post/models/index.ts");
var ViewPostComponent = /** @class */ (function () {
    function ViewPostComponent(_formBuilder, _postService, _router, _activatedRoute, _appConfig) {
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
        this.postStauts = "Publish";
    }
    ViewPostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.params.forEach(function (param) {
            _this.postId = +param["id"];
        });
        this.postForm = this._formBuilder.group({
            id: new forms_1.FormControl(0),
            postTitle: new forms_1.FormControl('', [forms_1.Validators.required]),
            content: new forms_1.FormControl(),
            permerlink: new forms_1.FormControl('', [forms_1.Validators.required]),
            postStatus: new forms_1.FormControl()
        });
        this.GetPost(this.postId);
    };
    ViewPostComponent.prototype.Save = function () {
        var _this = this;
        var postModel = this.postForm.value;
        postModel.coverImage = this.coverImage;
        this._postService.CreateNewPost(postModel)
            .subscribe(function (res) {
            _this.postForm.controls["id"].setValue(res.id);
        }, function (err) { return console.error(err); }, function () { _this.postForm.markAsPristine(); });
    };
    ViewPostComponent.prototype.Publish = function () {
        var _this = this;
        this.postForm.controls["postStatus"].setValue(models_1.PostStatus.Publish);
        var postModel = this.postForm.value;
        postModel.coverImage = this.coverImage;
        this._postService.CreateNewPost(postModel)
            .subscribe(function (res) { return console.log(res); }, function (err) { return console.error(err); }, function () {
            _this.postForm.markAsPristine();
            _this._router.navigate(['../all'], {
                relativeTo: _this._activatedRoute
            });
        });
    };
    ViewPostComponent.prototype.EditPermerlink = function () {
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
    ViewPostComponent.prototype.GeneratePermerlink = function () {
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
    ViewPostComponent.prototype.SaveClose = function () {
        var _this = this;
        this._postService.CreateNewPost(this.postForm.value)
            .subscribe(function (res) { return console.log(res); }, function (err) { return console.error(err); }, function () {
            _this.postForm.markAsPristine();
            _this._router.navigate(['../all'], { relativeTo: _this._activatedRoute });
        });
    };
    ViewPostComponent.prototype.Close = function () {
        this._router.navigate(['../all'], { relativeTo: this._activatedRoute });
    };
    ViewPostComponent.prototype.GetPost = function (id) {
        var _this = this;
        this._postService.GetPost(id).subscribe(function (res) {
            _this.postForm.controls["postTitle"].setValue(res.postTitle);
            _this.postForm.controls["content"].setValue(res.content);
            _this.postForm.controls["permerlink"].setValue(res.permerlink);
            _this.postForm.controls["id"].setValue(res.id);
            _this.postForm.controls["postStatus"].setValue(res.postStatus);
            _this.urlString = res.permerlink;
            _this.postStauts = res.postStatus;
            _this.coverImage = res.coverImage;
        });
    };
    ViewPostComponent.prototype.isDirty = function () {
        return this.postForm.dirty;
    };
    ViewPostComponent.prototype.GetCoverImage = function () {
        return this._appConfig.GetBaseApiUrl() + "/FileHandler/" + this.coverImage.id + "/" + this.coverImage.fileName;
    };
    ViewPostComponent.prototype.SetCover = function (file) {
        this.coverImage = file;
    };
    ViewPostComponent.prototype.RemoveCoverImage = function () {
        this.coverImage = null;
    };
    ViewPostComponent = __decorate([
        core_1.Component({
            selector: 'view-post',
            template: __webpack_require__("../../../../../src/app/areas/post/components/view-post.component.html"),
            styles: ["\n      .btn-clear-cover {\n        margin-bottom: 5px;\n    }"]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, services_1.PostService,
            router_1.Router, router_1.ActivatedRoute, app_config_1.AppConfig])
    ], ViewPostComponent);
    return ViewPostComponent;
}());
exports.ViewPostComponent = ViewPostComponent;


/***/ }),

/***/ "../../../../../src/app/areas/post/guards/deactivate/new-post-deactivate.gurd.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var NewPostDeactivateGurd = /** @class */ (function () {
    function NewPostDeactivateGurd() {
    }
    NewPostDeactivateGurd.prototype.canDeactivate = function (component, route, state) {
        if (component.isDirty()) {
            return confirm("Are you sure? Unsaved changes may lost.");
        }
        return true;
    };
    NewPostDeactivateGurd = __decorate([
        core_1.Injectable()
    ], NewPostDeactivateGurd);
    return NewPostDeactivateGurd;
}());
exports.NewPostDeactivateGurd = NewPostDeactivateGurd;


/***/ }),

/***/ "../../../../../src/app/areas/post/guards/deactivate/view-post-deactivate.gurd.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ViewPostDeactivateGurd = /** @class */ (function () {
    function ViewPostDeactivateGurd() {
    }
    ViewPostDeactivateGurd.prototype.canDeactivate = function (component, route, state) {
        if (component.isDirty()) {
            return confirm("Are you sure? Unsaved changes may lost.");
        }
        return true;
    };
    ViewPostDeactivateGurd = __decorate([
        core_1.Injectable()
    ], ViewPostDeactivateGurd);
    return ViewPostDeactivateGurd;
}());
exports.ViewPostDeactivateGurd = ViewPostDeactivateGurd;


/***/ }),

/***/ "../../../../../src/app/areas/post/guards/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../../../../../src/app/areas/post/guards/deactivate/new-post-deactivate.gurd.ts"));
__export(__webpack_require__("../../../../../src/app/areas/post/guards/deactivate/view-post-deactivate.gurd.ts"));


/***/ }),

/***/ "../../../../../src/app/areas/post/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../../../../../src/app/areas/post/post.module.ts"));


/***/ }),

/***/ "../../../../../src/app/areas/post/models/enums.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PostStatus;
(function (PostStatus) {
    PostStatus[PostStatus["Draft"] = 1] = "Draft";
    PostStatus[PostStatus["Publish"] = 2] = "Publish";
    PostStatus[PostStatus["Private"] = 3] = "Private";
    PostStatus[PostStatus["Disabled"] = 4] = "Disabled";
})(PostStatus = exports.PostStatus || (exports.PostStatus = {}));


/***/ }),

/***/ "../../../../../src/app/areas/post/models/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../../../../../src/app/areas/post/models/enums.ts"));


/***/ }),

/***/ "../../../../../src/app/areas/post/post-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var post_component_1 = __webpack_require__("../../../../../src/app/areas/post/components/post.component.ts");
var new_post_component_1 = __webpack_require__("../../../../../src/app/areas/post/components/new-post.component.ts");
var list_post_component_1 = __webpack_require__("../../../../../src/app/areas/post/components/list-post.component.ts");
var view_post_component_1 = __webpack_require__("../../../../../src/app/areas/post/components/view-post.component.ts");
var guards_1 = __webpack_require__("../../../../../src/app/areas/post/guards/index.ts");
var postRoutes = [
    {
        path: "post",
        component: post_component_1.PostComponent,
        // canActivate: [IsAuthenticatedGurd],
        canActivateChild: [],
        children: [
            {
                path: '',
                redirectTo: 'all',
                pathMatch: 'full'
            },
            {
                path: 'all',
                component: list_post_component_1.ListPostComponent
            },
            {
                path: 'new',
                component: new_post_component_1.NewPostComponent,
                canDeactivate: [guards_1.NewPostDeactivateGurd]
            },
            {
                path: ':id',
                component: view_post_component_1.ViewPostComponent,
                canDeactivate: [guards_1.ViewPostDeactivateGurd]
            }
        ]
    }
];
var PostRoutingModule = /** @class */ (function () {
    function PostRoutingModule() {
    }
    PostRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(postRoutes)],
            exports: [router_1.RouterModule]
        })
    ], PostRoutingModule);
    return PostRoutingModule;
}());
exports.PostRoutingModule = PostRoutingModule;


/***/ }),

/***/ "../../../../../src/app/areas/post/post.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var ng_bootstrap_1 = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var auth_1 = __webpack_require__("../../../../../src/app/auth/index.ts");
//Routing
var post_routing_module_1 = __webpack_require__("../../../../../src/app/areas/post/post-routing.module.ts");
var components_1 = __webpack_require__("../../../../../src/app/areas/post/components/index.ts");
var services_1 = __webpack_require__("../../../../../src/app/areas/post/services/index.ts");
var guards_1 = __webpack_require__("../../../../../src/app/areas/post/guards/index.ts");
var PostModule = /** @class */ (function () {
    function PostModule() {
    }
    PostModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.ReactiveFormsModule, post_routing_module_1.PostRoutingModule, ng_bootstrap_1.NgbDropdownModule, ng_bootstrap_1.NgbModalModule, auth_1.AuthModule],
            declarations: [components_1.PostComponent, components_1.NewPostComponent, components_1.ListPostComponent, components_1.ViewPostComponent, components_1.CoverImageModalComponent],
            providers: [services_1.PostService, guards_1.NewPostDeactivateGurd, guards_1.ViewPostDeactivateGurd],
            exports: [components_1.NewPostComponent],
        })
    ], PostModule);
    return PostModule;
}());
exports.PostModule = PostModule;


/***/ }),

/***/ "../../../../../src/app/areas/post/services/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../../../../../src/app/areas/post/services/post.service.ts"));


/***/ }),

/***/ "../../../../../src/app/areas/post/services/post.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var PostService = /** @class */ (function () {
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
    PostService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], PostService);
    return PostService;
}());
exports.PostService = PostService;


/***/ }),

/***/ "../../../../../src/app/areas/shared/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../../../../../src/app/areas/shared/shared.module.ts"));


/***/ }),

/***/ "../../../../../src/app/areas/shared/services/file-upload.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var app_config_1 = __webpack_require__("../../../../../src/app/app.config.ts");
var FileUploadService = /** @class */ (function () {
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
    FileUploadService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, app_config_1.AppConfig])
    ], FileUploadService);
    return FileUploadService;
}());
exports.FileUploadService = FileUploadService;


/***/ }),

/***/ "../../../../../src/app/areas/shared/services/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../../../../../src/app/areas/shared/services/file-upload.service.ts"));


/***/ }),

/***/ "../../../../../src/app/areas/shared/shared.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var services_1 = __webpack_require__("../../../../../src/app/areas/shared/services/index.ts");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [],
            providers: [services_1.FileUploadService],
            exports: []
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;


/***/ }),

/***/ "../../../../../src/app/areas/user/components/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../../../../../src/app/areas/user/components/user.component.ts"));


/***/ }),

/***/ "../../../../../src/app/areas/user/components/user.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent = __decorate([
        core_1.Component({
            selector: 'user',
            template: "<h1>User Component</h1>"
        })
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;


/***/ }),

/***/ "../../../../../src/app/areas/user/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../../../../../src/app/areas/user/user.module.ts"));


/***/ }),

/***/ "../../../../../src/app/areas/user/user-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var components_1 = __webpack_require__("../../../../../src/app/areas/user/components/index.ts");
var userRoutes = [
    {
        path: 'user',
        component: components_1.UserComponent
    }
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(userRoutes)],
            exports: [router_1.RouterModule]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());
exports.UserRoutingModule = UserRoutingModule;


/***/ }),

/***/ "../../../../../src/app/areas/user/user.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var user_routing_module_1 = __webpack_require__("../../../../../src/app/areas/user/user-routing.module.ts");
var components_1 = __webpack_require__("../../../../../src/app/areas/user/components/index.ts");
var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, user_routing_module_1.UserRoutingModule],
            declarations: [components_1.UserComponent],
            providers: [],
            exports: []
        })
    ], UserModule);
    return UserModule;
}());
exports.UserModule = UserModule;


/***/ }),

/***/ "../../../../../src/app/auth/auth.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var services_1 = __webpack_require__("../../../../../src/app/auth/services/index.ts");
var guards_1 = __webpack_require__("../../../../../src/app/auth/guards/index.ts");
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, http_1.HttpModule, router_1.RouterModule],
            declarations: [],
            providers: [services_1.AuthService, guards_1.IsAuthenticatedGurd],
            exports: []
        })
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;


/***/ }),

/***/ "../../../../../src/app/auth/guards/auth.guards.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var services_1 = __webpack_require__("../../../../../src/app/auth/services/index.ts");
var IsAuthenticatedGurd = /** @class */ (function () {
    function IsAuthenticatedGurd(_authService) {
        this._authService = _authService;
    }
    IsAuthenticatedGurd.prototype.canActivate = function (route, state) {
        return this._authService.IsAuthenticated().map(function (res) {
            //res.isAuthenticated = true;
            if (res.isAuthenticated)
                return true;
            else {
                console.log("Session got expaird. User is not authenticated. Please login.");
                window.location.reload(true);
                return false;
            }
        });
    };
    IsAuthenticatedGurd = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [services_1.AuthService])
    ], IsAuthenticatedGurd);
    return IsAuthenticatedGurd;
}());
exports.IsAuthenticatedGurd = IsAuthenticatedGurd;


/***/ }),

/***/ "../../../../../src/app/auth/guards/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../../../../../src/app/auth/guards/auth.guards.ts"));


/***/ }),

/***/ "../../../../../src/app/auth/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../../../../../src/app/auth/auth.module.ts"));


/***/ }),

/***/ "../../../../../src/app/auth/services/auth.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var AuthService = /** @class */ (function () {
    function AuthService(_http) {
        this._http = _http;
        this.authUrl = '/auth';
    }
    AuthService.prototype.IsAuthenticated = function () {
        return this._http.get(this.authUrl + "/IsAuthenticated").map(function (res) { return res.json(); });
    };
    AuthService.prototype.GetUserInfo = function () {
        return this._http.get(this.authUrl + "/details").map(function (res) { return res.json(); });
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;


/***/ }),

/***/ "../../../../../src/app/auth/services/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../../../../../src/app/auth/services/auth.service.ts"));


/***/ }),

/***/ "../../../../../src/app/layout/components/footer-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\r\n\r\n</footer>"

/***/ }),

/***/ "../../../../../src/app/layout/components/footer-layout.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var FooterLayoutComponent = /** @class */ (function () {
    function FooterLayoutComponent() {
    }
    FooterLayoutComponent = __decorate([
        core_1.Component({
            selector: 'footer-layout',
            template: __webpack_require__("../../../../../src/app/layout/components/footer-layout.component.html")
        })
    ], FooterLayoutComponent);
    return FooterLayoutComponent;
}());
exports.FooterLayoutComponent = FooterLayoutComponent;


/***/ }),

/***/ "../../../../../src/app/layout/components/header-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <!--<nav class=\"navbar navbar-toggleable-md navbar-light bg-faded\">\r\n      <button type=\"button\" class=\"navbar-toggler hidden-sm-up\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\r\n          <span class=\"sr-only\">Toggle navigation</span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\" href=\"#\">Bloggy</a>\r\n      <div id=\"navbar\">\r\n\r\n          <div class=\"pull-right pull-xl-12\">\r\n              <div class=\"dropdown user-action\" ngbDropdown dropdown>\r\n                  <div class=\"user-detail\"  id=\"userDropdownMenu\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                     <div ngbDropdownToggle >\r\n                         <img [src]=\"GetUserImage()\" />\r\n                         <span>{{fullName}} </span>\r\n                     </div>\r\n                  </div>\r\n\r\n                  <div class=\"dropdown-menu user-action-menu\" aria-labelledby=\"userDropdownMenu\">\r\n                      <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i> Profile</a>\r\n                      <div class=\"dropdown-divider\"></div>\r\n                      <a class=\"dropdown-item\"  href=\"/Auth/LogOff\"><i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i> Logout</a>\r\n                  </div>\r\n              </div>\r\n\r\n          </div>\r\n\r\n      </div>\r\n  </nav>-->\r\n  <!--<nav class=\"navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top \">\r\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n            aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <a class=\"navbar-brand\" href=\"#\">Bloggy</a>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item active\">\r\n          <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\">Link</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\r\n        </li>\r\n      </ul>\r\n      <div class=\"my-2 my-lg-0\">\r\n        <div class=\"dropdown user-action\" ngbDropdown dropdown>\r\n          <div class=\"user-detail\" id=\"userDropdownMenu\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            <div ngbDropdownToggle>\r\n              <img [src]=\"GetUserImage()\" />\r\n              <span style=\"color:#fff\">{{fullName}} <i class=\"fa fa-caret-down\" aria-hidden=\"true\"></i></span>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"dropdown-menu user-action-menu\" aria-labelledby=\"userDropdownMenu\">\r\n            <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i> Profile</a>\r\n            <div class=\"dropdown-divider\"></div>\r\n            <a class=\"dropdown-item\" href=\"/Auth/LogOff\"><i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i> Logout</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </nav>-->\r\n\r\n  <nav class=\"navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0\">\r\n    <a class=\"navbar-brand col-sm-3 col-md-2 mr-0\" href=\"#\">Blog Platform</a>\r\n  <!--  <input class=\"form-control form-control-dark w-100\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">-->\r\n    <ul class=\"navbar-nav px-3\">\r\n      <li class=\"nav-item text-nowrap\">\r\n        <a class=\"nav-link\" href=\"#\">Sign out</a>\r\n      </li>\r\n    </ul>\r\n  </nav>\r\n\r\n\r\n</header>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/components/header-layout.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var services_1 = __webpack_require__("../../../../../src/app/auth/services/index.ts");
var app_config_1 = __webpack_require__("../../../../../src/app/app.config.ts");
var HeaderLayoutComponent = /** @class */ (function () {
    function HeaderLayoutComponent(_authService, _appConfig) {
        this._authService = _authService;
        this._appConfig = _appConfig;
    }
    HeaderLayoutComponent.prototype.ngOnInit = function () {
        //this._authService.GetUserInfo().subscribe(res => {
        //    this.userInfo = res;
        //    this.fullName = res.firstName + ' ' + res.lastName;
        //}, err => console.error(err));
    };
    HeaderLayoutComponent.prototype.GetUserImage = function () {
        if (this.userInfo != undefined && this.userInfo.imageAvailable != undefined && this.userInfo.imageAvailable)
            return this._appConfig.GetBaseApiUrl() + "/User/ProfileImage?email=" + this.userInfo.email;
        else
            return 'assets/images/default_profile.png';
    };
    HeaderLayoutComponent = __decorate([
        core_1.Component({
            selector: 'header-layout',
            template: __webpack_require__("../../../../../src/app/layout/components/header-layout.component.html"),
        }),
        __metadata("design:paramtypes", [services_1.AuthService, app_config_1.AppConfig])
    ], HeaderLayoutComponent);
    return HeaderLayoutComponent;
}());
exports.HeaderLayoutComponent = HeaderLayoutComponent;


/***/ }),

/***/ "../../../../../src/app/layout/components/layout.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent = __decorate([
        core_1.Component({
            selector: 'layout',
            template: ""
        })
    ], LayoutComponent);
    return LayoutComponent;
}());
exports.LayoutComponent = LayoutComponent;


/***/ }),

/***/ "../../../../../src/app/layout/components/sidebar-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-3 col-md-2 sidebar\">\r\n    <ul class=\"nav nav-sidebar\">\r\n        <li   class=\"nav-item\" [routerLinkActive]=\"['active']\"  routerLink=\"dashboard\"   ><a >Dashboard <span class=\"sr-only\">(current)</span></a></li>\r\n        <li  class=\"nav-item\" [routerLinkActive]=\"['active']\" routerLink=\"post/all\" ><a  >Posts</a></li>\r\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\" routerLink=\"media/all\"><a>Media</a></li>\r\n    </ul>\r\n    \r\n</div>\r\n\r\n\r\n<nav class=\"col-md-2 d-none d-md-block bg-light sidebar\">\r\n  <div class=\"sidebar-sticky\">\r\n    <ul class=\"nav flex-column\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link active\" [routerLinkActive]=\"['active']\"  routerLink=\"dashboard\"  >\r\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-home\"><path d=\"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"></path><polyline points=\"9 22 9 12 15 12 15 22\"></polyline></svg>\r\n          Dashboard <span class=\"sr-only\">(current)</span>\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLinkActive]=\"['active']\" routerLink=\"post/all\">\r\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-file\"><path d=\"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z\"></path><polyline points=\"13 2 13 9 20 9\"></polyline></svg>\r\n          Posts\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLinkActive]=\"['active']\" routerLink=\"media/all\">\r\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-shopping-cart\"><circle cx=\"9\" cy=\"21\" r=\"1\"></circle><circle cx=\"20\" cy=\"21\" r=\"1\"></circle><path d=\"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6\"></path></svg>\r\n          Media\r\n        </a>\r\n      </li>\r\n   \r\n    </ul>\r\n\r\n   \r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/components/sidebar-menu.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var SidebarMenuComponent = /** @class */ (function () {
    function SidebarMenuComponent() {
    }
    SidebarMenuComponent = __decorate([
        core_1.Component({
            selector: 'sidebar-menu',
            template: __webpack_require__("../../../../../src/app/layout/components/sidebar-menu.component.html")
        })
    ], SidebarMenuComponent);
    return SidebarMenuComponent;
}());
exports.SidebarMenuComponent = SidebarMenuComponent;


/***/ }),

/***/ "../../../../../src/app/layout/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../../../../../src/app/layout/layout.module.ts"));


/***/ }),

/***/ "../../../../../src/app/layout/layout.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var ng_bootstrap_1 = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var layout_component_1 = __webpack_require__("../../../../../src/app/layout/components/layout.component.ts");
var header_layout_component_1 = __webpack_require__("../../../../../src/app/layout/components/header-layout.component.ts");
var footer_layout_component_1 = __webpack_require__("../../../../../src/app/layout/components/footer-layout.component.ts");
var sidebar_menu_component_1 = __webpack_require__("../../../../../src/app/layout/components/sidebar-menu.component.ts");
var layout_routing_1 = __webpack_require__("../../../../../src/app/layout/layout.routing.ts");
var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, ng_bootstrap_1.NgbDropdownModule, layout_routing_1.layoutRouting],
            declarations: [layout_component_1.LayoutComponent, header_layout_component_1.HeaderLayoutComponent, footer_layout_component_1.FooterLayoutComponent, sidebar_menu_component_1.SidebarMenuComponent],
            exports: [layout_component_1.LayoutComponent, header_layout_component_1.HeaderLayoutComponent, footer_layout_component_1.FooterLayoutComponent, sidebar_menu_component_1.SidebarMenuComponent]
        })
    ], LayoutModule);
    return LayoutModule;
}());
exports.LayoutModule = LayoutModule;


/***/ }),

/***/ "../../../../../src/app/layout/layout.routing.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var layoutRoutes = [];
exports.layoutRouting = router_1.RouterModule.forChild(layoutRoutes);


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map