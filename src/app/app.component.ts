import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'From Haseeb';
  displayVal: string = '';
  getvalue() {
    let a = 10;
    let b = 10;
    return a + b;
  }
  getNewValue(val: string) {
    this.displayVal = val;
  }
  count: number = 0;
  setCount(type: string) {
    type === 'add' ? this.count++ : this.count--;
  }

  state = true;
  changVal() {
    if (this.state === true) {
      this.state = false;
      console.log('in If');
      return;
    }
    this.state = true;
  }
  getData(val:NgForm){
    console.log(val);
    
  }
}
