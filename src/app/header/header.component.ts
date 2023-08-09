import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  menu = [
    { title: 'Home', link: '' },
    { title: 'About', link: '/login' },
    { title: 'Success Story', link: '/child' },
    { title: 'Contact', link: '/parent' },
  ];
}
