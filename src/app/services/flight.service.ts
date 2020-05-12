import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flight } from '../models/flight';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http: HttpClient) { }

  endpoint = "https://flightscheduler.herokuapp.com/flights/";  //CORS issues

  //Get All
  getFlights(): Observable<any>{
    return this.http.get(this.endpoint);
  }
  //Get One
  getFlight(id: number): Observable<any>{
    return this.http.get(this.endpoint + id);
  }
  //Update One
  updateFlight(id: number, flight: Flight): Observable<any>{
    return this.http.put(this.endpoint + id,flight);
  }
  //Add One
  addFlight(flight: Flight): Observable<any>{
    return this.http.post(this.endpoint,flight);
  }
  //Delete One
  deleteFlight(id: number): Observable<any>{
    return this.http.delete(this.endpoint + id);
  }
  //Delete All
  deleteFlights(): Observable<any>{
    return this.http.delete(this.endpoint);
  }

}
