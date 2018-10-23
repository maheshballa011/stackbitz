import { NgModule } from '@angular/core';
import { RouterModule,  Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { UserComponent } from './login/user/user.component';

const routes: Routes = [
  {
    path: 'loginPage',
    component: LoginComponent
  },
  {
    path: 'user',
    component: UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule]
})
export class AppRoutingModule {
 }
