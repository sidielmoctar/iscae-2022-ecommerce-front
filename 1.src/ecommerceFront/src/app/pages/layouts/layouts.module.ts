import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {SideBarComponent} from "./side-bar/side-bar.component";
import {SharedModule} from "../../common/shared/shared.module";


@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    SharedModule
  ]
})
export class LayoutsModule { }
