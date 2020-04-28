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
    AboutUsComponent,
  ]
})

export class AdminLayoutModule {}
