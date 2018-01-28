import { NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';

import {FileUploadService } from './services';

@NgModule({
    imports: [CommonModule],
    declarations: [],
    providers: [FileUploadService],
    exports:[]
})
export class SharedModule { }
