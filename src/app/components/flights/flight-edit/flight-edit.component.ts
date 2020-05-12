import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FlightService } from 'src/app/services/flight.service';
import { ActivatedRoute } from '@angular/router';
import { Flight } from 'src/app/models/flight';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styles: []
})
export class FlightEditComponent implements OnInit {

  submitted = false;  //submissions status

  constructor(private flightService: FlightService, private route: ActivatedRoute) { }

  id: number;
  flight = new Flight(); // a flight
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(
        params => this.id = parseInt(params.get('id'))
      );
    this.loadData();
  }

  loadData(){
    this.flightService.getFlight(this.id)
      .subscribe(
        data => this.flight = data
      )
  }

  handleSubmit(f:NgForm){
    this.flightService.updateFlight(this.id,f.value)
      .subscribe(
        data => {
          this.submitted = true;
          console.log("Form: ",f.value);
          console.log("Data: ",data);
        }
      )
  }
}
