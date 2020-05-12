import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FlightsComponent } from './flights.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { FlightAddComponent } from './flight-add/flight-add.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  {
    path: '', component: FlightsComponent,
    children: [
      { path: 'show', component: FlightListComponent },
      { path: 'add', component: FlightAddComponent },
      { path: 'edit/:id', component: FlightEditComponent }
    ]
  }];

@NgModule({
  declarations: [FlightsComponent, FlightListComponent, FlightAddComponent, FlightEditComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes),FormsModule, ReactiveFormsModule
  ],
  exports: [FormsModule, ReactiveFormsModule]
})
export class FlightsModule { }
