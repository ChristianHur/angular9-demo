import { Component, OnInit } from '@angular/core';
import { FlightService } from 'src/app/services/flight.service';
import { Flight } from 'src/app/models/flight';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styles: []
})
export class FlightListComponent implements OnInit {

  count : number;     // current record count
  submitted = false;  // submissions status

  constructor(private flightService: FlightService) {
   }

  flights: Flight[];  // all flights

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.flightService.getFlights()
      .subscribe(
        data => {
          this.flights = data;
          this.count = this.flights.length;
        }
        );
  }

  deleteOne(id: number){
    this.flightService.deleteFlight(id)
      .subscribe(
        data => {
          this.submitted = true;
          this.loadData();
          console.log("Data: ",data);          
        });
  }

  deleteAll(){
    this.flightService.deleteFlights()
      .subscribe(
        data => {
          this.submitted = true;
          this.loadData();
          console.log("Data: ",data);
        }
      )
  }

}
