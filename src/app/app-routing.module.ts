import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewsComponent} from './news/news.component';
import {LoginComponent} from './users/login/login.component';
import {RegistrationComponent} from './users/registration/registration.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'news',
    pathMatch: 'full'
  },
  {
    path: 'news',
    component: NewsComponent,
    children: [
      {path: 'news', component: NewsComponent, pathMatch: 'full'}
    ]
  },
  {
    path: 'users',
    children: [
      {path: '', redirectTo: 'users/login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent, pathMatch: 'full'},
      {path: 'register', component: RegistrationComponent, pathMatch: 'full'}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
