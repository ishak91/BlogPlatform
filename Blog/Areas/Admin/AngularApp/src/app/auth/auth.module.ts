import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AuthService } from './services';
import { IsAuthenticatedGurd } from './guards';

@NgModule({
    imports: [CommonModule, HttpModule, RouterModule],
    declarations: [],
    providers: [AuthService, IsAuthenticatedGurd],
    exports:[]
})
export class AuthModule { }