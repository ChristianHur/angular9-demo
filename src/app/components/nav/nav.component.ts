import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styles: []
})
export class NavComponent {
  navMenus = [
    {"url":"/","text":"Home","active":true},
    {"url":"/about","text":"About","active":false},
    {"url":"/contact","text":"Contact","active":false},
    {"url":"/register","text":"Register","active":false},
    {"url":"/template","text":"Template-Driven","active":false},
    {"url":"/reactive","text":"Reactive","active":false},
    {"url":"/flights","text":"Flights","active":false},
  ]
  title = "My Sample App";
}
