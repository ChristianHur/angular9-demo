import { Component, OnInit } from '@angular/core';
import { IUser } from '../../models/user';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService) { }

  user: IUser;
  users: IUser[];
  ngOnInit() {  
    this.users = this.userService.getUsers();
  };

  handleSubmit(f: NgForm){
    let id = Math.floor(Math.random() * 100);
    f.value.id = id;
    this.userService.addUser(f.value);
  }

}
