import { Routes } from '@angular/router';

import { AboutUsComponent } from 'src/app/pages/about-us/about-us.component';
import { ActionsComponent } from 'src/app/pages/actions/actions.component';
import { ActionsAddComponent } from 'src/app/pages/actions-add/actions-add.component';
import { PatternsComponent } from 'src/app/pages/patterns/patterns.component';
import { PatternsAddComponent } from 'src/app/pages/patterns-add/patterns-add.component';
import { SocialMediaComponent } from 'src/app/pages/social-media/social-media.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'about-us', component: AboutUsComponent },
    { path: 'actions', component: ActionsComponent },
    { path: 'actions-add', component: ActionsAddComponent },
    { path: 'patterns', component: PatternsComponent },
    { path: 'patterns-add', component: PatternsAddComponent },
    { path: 'social-media', component: SocialMediaComponent }
];
