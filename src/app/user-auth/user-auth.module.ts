import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginTestComponent } from './login-test/login-test.component';

@NgModule({
  declarations: [LoginTestComponent],
  imports: [CommonModule],
  exports: [LoginTestComponent],
})
export class UserAuthModule {}
