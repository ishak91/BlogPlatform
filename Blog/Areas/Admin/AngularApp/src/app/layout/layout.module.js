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
var layout_component_1 = require("./components/layout.component");
var header_layout_component_1 = require("./components/header-layout.component");
var footer_layout_component_1 = require("./components/footer-layout.component");
var sidebar_menu_component_1 = require("./components/sidebar-menu.component");
var layout_routing_1 = require("./layout.routing");
var LayoutModule = (function () {
    function LayoutModule() {
    }
    return LayoutModule;
}());
LayoutModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, ng_bootstrap_1.NgbDropdownModule, layout_routing_1.layoutRouting],
        declarations: [layout_component_1.LayoutComponent, header_layout_component_1.HeaderLayoutComponent, footer_layout_component_1.FooterLayoutComponent, sidebar_menu_component_1.SidebarMenuComponent],
        exports: [layout_component_1.LayoutComponent, header_layout_component_1.HeaderLayoutComponent, footer_layout_component_1.FooterLayoutComponent, sidebar_menu_component_1.SidebarMenuComponent]
    })
], LayoutModule);
exports.LayoutModule = LayoutModule;
//# sourceMappingURL=layout.module.js.map