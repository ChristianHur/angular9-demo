import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChildAComponent } from './components/child-a/child-a.component';
import { ChildBComponent } from './components/child-b/child-b.component';
import { HomeComponent } from './components/home/home.component';
// import { ContactComponent } from './components/contact/contact.component';
import { AboutModule } from './components/about/about.module';
// import { NotfoundComponent } from './components/notfound/notfound.component';
// import { UserComponent } from './components/user/user.component';
// import { RegisterComponent } from './components/register/register.component';
// import { TemplateDrivenComponent } from './components/template-driven/template-driven.component';
// import { ReactiveComponent } from './components/reactive/reactive.component';
// import { FlightsComponent } from './components/flights/flights.component';
// import { FlightListComponent } from './components/flights/flight-list/flight-list.component';
// import { FlightAddComponent } from './components/flights/flight-add/flight-add.component';
// import { FlightEditComponent } from './components/flights/flight-edit/flight-edit.component';
import { ContactModule } from './components/contact/contact.module';
import { FlightsModule } from './components/flights/flights.module';
import { UserModule } from './components/user/user.module';
import { ReactiveModule } from './components/reactive/reactive.module';
import { RegisterModule } from './components/register/register.module';
import { FlightAddModule } from './components/flights/flight-add/flight-add.module';
import { FlightEditModule } from './components/flights/flight-edit/flight-edit.module';
import { FlightListModule } from './components/flights/flight-list/flight-list.module';
import { NotfoundModule } from './components/notfound/notfound.module';
import { TemplateDrivenModule } from './components/template-driven/template-driven.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    ChildAComponent,
    ChildBComponent,
    HomeComponent,
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AboutModule,
    ContactModule,
    FlightsModule,
    UserModule,
    ReactiveModule,
    TemplateDrivenModule,
    RegisterModule,
    FlightAddModule,
    FlightEditModule,
    FlightListModule,
    NotfoundModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
