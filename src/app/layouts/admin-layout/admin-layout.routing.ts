import { Routes } from '@angular/router';

import { AboutUsComponent } from 'src/app/pages/about-us/about-us.component';
import { ActionsComponent } from 'src/app/pages/actions/actions.component';
import { ActionsAddComponent } from 'src/app/pages/actions-add/actions-add.component';
import { PatternsComponent } from 'src/app/pages/patterns/patterns.component';
import { PatternsAddComponent } from 'src/app/pages/patterns-add/patterns-add.component';
import { SocialMediaComponent } from 'src/app/pages/social-media/social-media.component';
import { VolunteersAddComponent } from 'src/app/pages/volunteers-add/volunteers-add.component';
import { VolunteersComponent } from 'src/app/pages/volunteers/volunteers.component';
import { UsersComponent } from 'src/app/pages/users/users.component';
import { UsersAddComponent } from 'src/app/pages/users-add/users-add.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'about-us', component: AboutUsComponent },
    { path: 'actions', component: ActionsComponent },
    { path: 'actions-add', component: ActionsAddComponent },
    { path: 'patterns', component: PatternsComponent },
    { path: 'patterns-add', component: PatternsAddComponent },
    { path: 'social-media', component: SocialMediaComponent },
    { path: 'volunteers-add', component: VolunteersAddComponent },
    { path: 'volunteers', component: VolunteersComponent },
    { path: 'users-add', component: UsersAddComponent },
    { path: 'users', component: UsersComponent },
];
