import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../core/material.module';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { UserComponent } from './user/user.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [LoginComponent, UserComponent]
})
export class LoginModule { }
