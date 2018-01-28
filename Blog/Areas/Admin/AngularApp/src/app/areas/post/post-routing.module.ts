import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostComponent } from './components/post.component';
import { NewPostComponent } from './components/new-post.component';
import { ListPostComponent } from './components/list-post.component'
import { ViewPostComponent } from './components/view-post.component'

import {NewPostDeactivateGurd, ViewPostDeactivateGurd } from './guards'

import { IsAuthenticatedGurd} from '../../auth/guards'

const postRoutes: Routes = [
    {
        path: "post",
        component: PostComponent,
       // canActivate: [IsAuthenticatedGurd],
        canActivateChild: [],
        children: [
            {
                path: '',
                redirectTo: 'all',
                pathMatch:'full'
            },
            {
                path: 'all',
                component: ListPostComponent
            },
            {
                path: 'new',
                component: NewPostComponent,
                canDeactivate: [NewPostDeactivateGurd]
            },
            {
                path: ':id',
                component: ViewPostComponent,
                canDeactivate: [ViewPostDeactivateGurd]
            }
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(postRoutes)],
    exports: [RouterModule]
})
export class PostRoutingModule { }
