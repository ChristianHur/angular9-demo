import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styles: []
})
export class ReactiveComponent implements OnInit {

  constructor() { }

    name = new FormControl("",[Validators.required,Validators.minLength(2)]);
    username = new FormControl("",[Validators.required,Validators.minLength(3)]);
    email = new FormControl();

  // myForm = new FormGroup({
  //   name : new FormControl("",[Validators.required,Validators.minLength(2)]),
  //   username : new FormControl(),
  //   email : new FormControl(),
  // });

  // get f(){ return this.myForm.controls}
  // get name(){ return this.myForm.controls.name}

  users = [];
  onSubmit(){
    // this.users.push(this.myForm.value)
    // console.log(this.myForm)
  }

  ngOnInit(): void {
  }

}
