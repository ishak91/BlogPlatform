import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';


import {AuthModule } from '../../auth';

//Routing
import { PostRoutingModule } from './post-routing.module'

import { NewPostComponent, ListPostComponent, PostComponent, ViewPostComponent, CoverImageModalComponent } from './components'
import {PostService } from './services'

import { NewPostDeactivateGurd, ViewPostDeactivateGurd } from './guards';



@NgModule({
    imports: [CommonModule, ReactiveFormsModule, PostRoutingModule, NgbDropdownModule, NgbModalModule, AuthModule],
    declarations: [PostComponent, NewPostComponent, ListPostComponent, ViewPostComponent, CoverImageModalComponent],
    providers: [PostService, NewPostDeactivateGurd, ViewPostDeactivateGurd],
    exports: [NewPostComponent],
})
export class PostModule
{
}