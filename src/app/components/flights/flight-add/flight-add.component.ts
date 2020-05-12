import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-flight-add',
  templateUrl: './flight-add.component.html',
  styles: []
})
export class FlightAddComponent implements OnInit {

  submitted = false;  //submissions status
  
  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
  }

  handleSubmit(f:NgForm){
    this.flightService.addFlight(f.value)
      .subscribe(
        data => {
          this.submitted=true;
          console.log('form:',f.value);
          console.log('data: ',data);
        }
      );    
  }

}
