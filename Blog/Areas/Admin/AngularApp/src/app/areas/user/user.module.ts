import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common'

import { UserRoutingModule} from './user-routing.module'
import { UserComponent } from './components'


@NgModule({
    imports: [CommonModule, UserRoutingModule],
    declarations: [UserComponent],
    providers: [],
    exports:[]
})
export class UserModule
{
}