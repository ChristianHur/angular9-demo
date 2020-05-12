import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDrivenComponent } from './template-driven.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '', component: TemplateDrivenComponent,
  }]

@NgModule({
  declarations: [TemplateDrivenComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes), FormsModule, ReactiveFormsModule
  ],
  exports:[
    FormsModule, ReactiveFormsModule
  ]
})
export class TemplateDrivenModule { }
