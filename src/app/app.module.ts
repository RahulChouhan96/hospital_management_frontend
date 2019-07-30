import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AllHospitalsComponent } from './components/all-hospitals/all-hospitals.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HospitalComponent } from './components/hospital/hospital.component';
import { AddPatientComponent } from './components/add-patient/add-patient.component';

@NgModule({
  declarations: [
    AppComponent,
    AllHospitalsComponent,
    NavbarComponent,
    HospitalComponent,
    AddPatientComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
