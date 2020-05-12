import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/app/models/user';

@Component({
  selector: 'app-child-b',
  templateUrl: './child-b.component.html',
  styles: [],
})
export class ChildBComponent implements OnInit {

  childb_message = "";
  @Output() messageFromChildB = new EventEmitter<string>();
  constructor(private userService: UserService) { }

  sendToParent(){
    console.log(`Child B:  Sending message: ${this.childb_message}`);
    this.messageFromChildB.emit(this.childb_message);
  }
  users : IUser[];
  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

}
