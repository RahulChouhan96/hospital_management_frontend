import { Component, OnInit } from '@angular/core';
import { HospitalService } from 'src/app/services/hospital.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
  obj = {};
  constructor(private hospitalSrv: HospitalService, private router: Router) { }

  ngOnInit() {
  }

  addPatient(){
    this.hospitalSrv.addPatient(this.obj)
    .subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/manipalHospitals']);
      },
      err=>{
        console.log("Error while adding patient", err);
      }
    );
  }

}
