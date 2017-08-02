import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlashMessagesModule} from 'ngx-flash-messages';
import {HttpModule} from '@angular/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NewsComponent} from './components/news/news.component';
import {TopnavComponent} from './components/navbar/topnav/topnav.component';
import {FooterComponent} from './components/layout/footer/footer.component';
import {HeaderComponent} from './components/layout/header/header.component';
import {LoginComponent} from './components/users/login/login.component';
import {RegistrationComponent} from './components/users/registration/registration.component';
import {AuthGuard} from './guards/auth/auth.guard';
import {AuthService} from './services/auth.service';
import {ProfileComponent} from './components/users/profile/profile.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {BreadcrumbComponent} from './components/layout/breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    TopnavComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    RegistrationComponent,
    ProfileComponent,
    DashboardComponent,
    BreadcrumbComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    FlashMessagesModule
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
