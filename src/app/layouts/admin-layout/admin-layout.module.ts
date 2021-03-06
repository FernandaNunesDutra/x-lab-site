import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutUsComponent } from 'src/app/pages/about-us/about-us.component';
import { ActionsComponent } from 'src/app/pages/actions/actions.component';
import { ActionsAddComponent } from 'src/app/pages/actions-add/actions-add.component';
import { PatternsComponent } from 'src/app/pages/patterns/patterns.component';
import { PatternsAddComponent } from 'src/app/pages/patterns-add/patterns-add.component';
import { SocialMediaComponent } from 'src/app/pages/social-media/social-media.component';
import { VolunteersComponent } from 'src/app/pages/volunteers/volunteers.component';
import { VolunteersAddComponent } from 'src/app/pages/volunteers-add/volunteers-add.component';
import { UsersAddComponent } from 'src/app/pages/users-add/users-add.component';
import { UsersComponent } from 'src/app/pages/users/users.component';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [
    ActionsAddComponent,
    ActionsComponent,
    PatternsComponent,
    PatternsAddComponent,
    AboutUsComponent,
    SocialMediaComponent,
    VolunteersComponent,
    VolunteersAddComponent,
    UsersAddComponent,
    UsersComponent,
  ]
})

export class AdminLayoutModule {}
