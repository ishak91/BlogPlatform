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
var services_1 = require("../../auth/services");
var app_config_1 = require("../../app.config");
var HeaderLayoutComponent = (function () {
    function HeaderLayoutComponent(_authService, _appConfig) {
        this._authService = _authService;
        this._appConfig = _appConfig;
    }
    HeaderLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._authService.GetUserInfo().subscribe(function (res) {
            _this.userInfo = res;
            _this.fullName = res.firstName + ' ' + res.lastName;
        }, function (err) { return console.error(err); });
    };
    HeaderLayoutComponent.prototype.GetUserImage = function () {
        if (this.userInfo != undefined && this.userInfo.imageAvailable != undefined && this.userInfo.imageAvailable)
            return this._appConfig.GetBaseApiUrl() + "/User/ProfileImage?email=" + this.userInfo.email;
        else
            return '/images/profile/default_profile.png';
    };
    return HeaderLayoutComponent;
}());
HeaderLayoutComponent = __decorate([
    core_1.Component({
        selector: 'header-layout',
        templateUrl: 'templates/layout/header-layout.component.html'
    }),
    __metadata("design:paramtypes", [services_1.AuthService, app_config_1.AppConfig])
], HeaderLayoutComponent);
exports.HeaderLayoutComponent = HeaderLayoutComponent;
//# sourceMappingURL=header-layout.component.js.map