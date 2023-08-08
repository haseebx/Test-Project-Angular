import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';



import {UserAuthModule} from "./user-auth/user-auth.module";
import { HeaderComponent } from './header/header.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    UserAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
