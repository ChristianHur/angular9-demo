import { Component, OnInit } from '@angular/core';
import { Users } from '../../models/users.data';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {

  users = Users;
  constructor() { }
  
  ngOnInit(): void {    
  }
}
