import { Component } from '@angular/core';

@Component({
  selector: 'app-login-test',
  templateUrl: './login-test.component.html',
  styleUrls: ['./login-test.component.css']
})
export class LoginTestComponent {
  getName(name: string) {
    // alert("Name is "+ name)
    console.log(name);
  }
}
