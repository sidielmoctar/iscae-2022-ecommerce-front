import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {UtilService} from "../../../services/util.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginControl = new FormControl('',
    [Validators.required]);

  passwordControl = new FormControl('',
    [Validators.required]);

  constructor(public utilService: UtilService) {
  }
}
