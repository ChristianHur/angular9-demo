import { Component, OnInit } from '@angular/core';
import { Users } from '../../models/users.data';
import { ActivatedRoute } from '@angular/router';

interface User {
  id: number;
  first_name: string; 
  last_name: string; 
  title: string; 
  email: string; 
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: []
})
export class UserComponent implements OnInit {

  user : User;
  constructor( private route: ActivatedRoute ) {
    console.log('User Constructor ***');
   }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.user = Users[Users.findIndex( e => e.id == id)];
  }

}
