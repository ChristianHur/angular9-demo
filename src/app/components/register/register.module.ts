import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '', component: RegisterComponent,
  }]

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),FormsModule, ReactiveFormsModule
  ],
  exports:[
    FormsModule, ReactiveFormsModule
  ]
})
export class RegisterModule { }
