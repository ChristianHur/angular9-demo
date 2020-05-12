import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
// import { ContactComponent } from './components/contact/contact.component';
// import { RegisterComponent } from './components/register/register.component';
// import { NotfoundComponent } from './components/notfound/notfound.component';
// import { UserComponent } from './components/user/user.component';
// import { TemplateDrivenComponent } from './components/template-driven/template-driven.component';
// import { ReactiveComponent } from './components/reactive/reactive.component';
// import { FlightListComponent } from './components/flights/flight-list/flight-list.component';
// import { FlightAddComponent } from './components/flights/flight-add/flight-add.component';
// import { FlightEditComponent } from './components/flights/flight-edit/flight-edit.component';
// import { FlightsComponent } from './components/flights/flights.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'about',
    loadChildren: () => import('./components/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./components/contact/contact.module').then(m => m.ContactModule)
  },
  {
  path: 'register',
    loadChildren: () => import('./components/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'user/:id',
    loadChildren: () => import('./components/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'template',
    loadChildren: () => import('./components/template-driven/template-driven.module').then(m => m.TemplateDrivenModule)
  },
  {
    path: 'reactive',
    loadChildren: () => import('./components/reactive/reactive.module').then(m => m.ReactiveModule)
  },
  {
    path: 'flights',
    loadChildren: () => import('./components/flights/flights.module').then(m => m.FlightsModule)
  },
  {
    path: '**',
    loadChildren: () => import('./components/notfound/notfound.module').then(m => m.NotfoundModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
