import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AllHospitalsComponent } from './components/all-hospitals/all-hospitals.component';
import { HospitalComponent } from './components/hospital/hospital.component';
import { AddPatientComponent } from './components/add-patient/add-patient.component';

const routes: Routes = [
  {path: "manipalHospitals", component: AllHospitalsComponent},
  {path: "manipalHospitals/addPatient", component: AddPatientComponent},
  {path: "manipalHospitals/:name", component: HospitalComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
