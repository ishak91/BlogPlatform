import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';


import {LayoutComponent} from './components/layout.component';
import { HeaderLayoutComponent } from './components/header-layout.component';
import { FooterLayoutComponent } from './components/footer-layout.component';
import { SidebarMenuComponent } from './components/sidebar-menu.component'

import { layoutRouting } from './layout.routing';

@NgModule({
    imports: [CommonModule, NgbDropdownModule, layoutRouting],
    declarations: [LayoutComponent, HeaderLayoutComponent, FooterLayoutComponent, SidebarMenuComponent],
    exports: [LayoutComponent, HeaderLayoutComponent, FooterLayoutComponent, SidebarMenuComponent]
   
})
export class LayoutModule { }
