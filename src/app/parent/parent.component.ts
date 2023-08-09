import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  title="Parent";
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
  data: any = {};
  getData(val: NgForm) {
    console.log(val);
    this.data = val;
  }
  check = true;
  getChangeChild() {
    if (this.check === true) {
      this.check = false;
      return;
    }
    this.check = true;
  }
}
