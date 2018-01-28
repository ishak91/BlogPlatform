"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var auth_1 = require("../../auth");
//Routing
var post_routing_module_1 = require("./post-routing.module");
var components_1 = require("./components");
var services_1 = require("./services");
var guards_1 = require("./guards");
var PostModule = (function () {
    function PostModule() {
    }
    return PostModule;
}());
PostModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, forms_1.ReactiveFormsModule, post_routing_module_1.PostRoutingModule, ng_bootstrap_1.NgbDropdownModule, ng_bootstrap_1.NgbModalModule, auth_1.AuthModule],
        declarations: [components_1.PostComponent, components_1.NewPostComponent, components_1.ListPostComponent, components_1.ViewPostComponent, components_1.CoverImageModalComponent],
        providers: [services_1.PostService, guards_1.NewPostDeactivateGurd, guards_1.ViewPostDeactivateGurd],
        exports: [components_1.NewPostComponent],
    })
], PostModule);
exports.PostModule = PostModule;
//# sourceMappingURL=post.module.js.map