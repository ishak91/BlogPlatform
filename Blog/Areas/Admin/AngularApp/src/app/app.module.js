"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
//Components
var app_component_1 = require("./app.component");
var dashboard_component_1 = require("./areas/dashboard/dashboard.component");
//App Modules
var layout_1 = require("./layout");
var post_1 = require("./areas/post");
var user_1 = require("./areas/user");
var media_1 = require("./areas/media");
var shared_1 = require("./areas/shared");
var auth_1 = require("./auth");
//App Routing
var app_routing_module_1 = require("./app-routing.module");
//App Config
var app_config_1 = require("./app.config");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
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
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map