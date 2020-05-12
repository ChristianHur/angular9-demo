import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveComponent } from './reactive.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '', component: ReactiveComponent,
  }]

@NgModule({
  declarations: [ReactiveComponent],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(routes)
  ],
  exports:[
    FormsModule, ReactiveFormsModule
  ]
})
export class ReactiveModule { }
