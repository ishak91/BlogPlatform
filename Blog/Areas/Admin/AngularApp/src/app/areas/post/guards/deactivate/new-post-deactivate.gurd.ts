import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { NewPostComponent } from '../../components';

@Injectable()
export class NewPostDeactivateGurd implements CanDeactivate<NewPostComponent>
{
    canDeactivate(component: NewPostComponent, route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    {
        if (component.isDirty())
        {
            return confirm("Are you sure? Unsaved changes may lost.");   
        }
        return true;
    }
}
