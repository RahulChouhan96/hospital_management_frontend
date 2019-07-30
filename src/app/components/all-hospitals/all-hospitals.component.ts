import { Component, OnInit } from '@angular/core';
import { HospitalService } from 'src/app/services/hospital.service';

@Component({
  selector: 'app-all-hospitals',
  templateUrl: './all-hospitals.component.html',
  styleUrls: ['./all-hospitals.component.css']
})
export class AllHospitalsComponent implements OnInit {
  hospitals = [];
  constructor(public hospitalSrv: HospitalService) { }

  ngOnInit() {
    this.getAllHospitals();
  }

  getAllHospitals(){
    this.hospitalSrv.getAllHospitals()
    .subscribe(
      res=>{
        console.log(res);
        this.hospitals = res.response;
      },
      err=>{
        console.log("Error while fetching all hospital data", err);
      }
    );
  }

}
