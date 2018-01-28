import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { ViewPostComponent } from '../../components';

@Injectable()
export class ViewPostDeactivateGurd implements CanDeactivate<ViewPostComponent>
{
    canDeactivate(component: ViewPostComponent, route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (component.isDirty()) {
            return confirm("Are you sure? Unsaved changes may lost.");
        }
        return true;
    }
}