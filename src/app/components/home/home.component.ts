import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'Welcome to My Sample App!';
  data = {
    parent_points : 500,
    childB_message : "Waiting..."
    };

  addPoints(){
    let n = Math.floor(Math.random() * 25);
    this.data.parent_points += n;
    console.log(`Parent random points: ${n}`);
  }

  receivedFromB(message : string){
    this.data.childB_message = message;
    console.log(`Parent: message from Child B: ${message}`);
  }

}
