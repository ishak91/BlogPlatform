"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var components_1 = require("./components");
var services_1 = require("./services");
var media_routing_module_1 = require("./media-routing.module");
var shared_1 = require("../shared");
var MediaModule = (function () {
    function MediaModule() {
    }
    return MediaModule;
}());
MediaModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, media_routing_module_1.MediaRoutingModule, ng_bootstrap_1.NgbModalModule, shared_1.SharedModule],
        declarations: [components_1.AllMediaComponent, components_1.MediaComponent, components_1.ViewMediaComponent, components_1.MediaGalleryComponent, components_1.MediaUploadComponent],
        providers: [services_1.MediaService],
        exports: []
    })
], MediaModule);
exports.MediaModule = MediaModule;
//# sourceMappingURL=media.module.js.map