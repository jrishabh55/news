import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlashMessagesModule} from 'ngx-flash-messages';
import {HttpModule} from '@angular/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NewsComponent} from './news/news.component';
import {TopnavComponent} from './navbar/topnav/topnav.component';
import {FooterComponent} from './layout/footer/footer.component';
import {HeaderComponent} from './layout/header/header.component';
import {LoginComponent} from './users/login/login.component';
import {RegistrationComponent} from './users/registration/registration.component';
import {AuthGuard} from './auth/auth.guard';
import {AuthService} from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    TopnavComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    RegistrationComponent
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
