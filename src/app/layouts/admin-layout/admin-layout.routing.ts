import { Routes } from '@angular/router';

import { AboutUsComponent } from 'src/app/pages/about-us/about-us.component';
import { ActionsComponent } from 'src/app/pages/actions/actions.component';
import { ActionsAddComponent } from 'src/app/pages/actions-add/actions-add.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'about-us',       component: AboutUsComponent },
    { path: 'actions',        component: ActionsComponent },
    { path: 'actions-add',        component: ActionsAddComponent }

];
