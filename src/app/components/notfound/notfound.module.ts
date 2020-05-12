import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotfoundComponent } from './notfound.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: NotfoundComponent,
  }]

@NgModule({
  declarations: [NotfoundComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  exports:[]
})
export class NotfoundModule { }
