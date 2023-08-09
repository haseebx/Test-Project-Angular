import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserAuthModule } from './user-auth/user-auth.module';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChildComponent } from './child/child.component';
import { AppRoutingModule } from './app-routing.module';
import { ParentComponent } from './parent/parent.component';
@NgModule({
  declarations: [AppComponent, LoginComponent, HeaderComponent, ChildComponent, ParentComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    UserAuthModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
