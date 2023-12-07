import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignoutComponent } from './components/signout/signout.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signout', component: SignoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
