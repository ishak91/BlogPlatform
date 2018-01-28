"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var post_component_1 = require("./components/post.component");
var new_post_component_1 = require("./components/new-post.component");
var list_post_component_1 = require("./components/list-post.component");
var view_post_component_1 = require("./components/view-post.component");
var guards_1 = require("./guards");
var guards_2 = require("../../auth/guards");
var postRoutes = [
    {
        path: "post",
        component: post_component_1.PostComponent,
        canActivate: [guards_2.IsAuthenticatedGurd],
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
var PostRoutingModule = (function () {
    function PostRoutingModule() {
    }
    return PostRoutingModule;
}());
PostRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(postRoutes)],
        exports: [router_1.RouterModule]
    })
], PostRoutingModule);
exports.PostRoutingModule = PostRoutingModule;
//# sourceMappingURL=post-routing.module.js.map