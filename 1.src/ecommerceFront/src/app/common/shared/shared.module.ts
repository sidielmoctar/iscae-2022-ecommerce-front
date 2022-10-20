import {NgModule} from '@angular/core';
import {CommonElementsModule} from "../../common-elements/common-elements.module";
import {MaterialModule} from "../material/material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CommonElementsModule,
    MaterialModule,
  ]
})
export class SharedModule { }
