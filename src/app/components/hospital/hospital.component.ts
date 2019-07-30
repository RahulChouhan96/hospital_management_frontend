import { Component, OnInit } from '@angular/core';
import { HospitalService } from 'src/app/services/hospital.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {
  constructor(private hospitalSrv: HospitalService, private acRoute: ActivatedRoute, private router: Router) { }
  inPatients = [];
  outPatients = [];
  isEdit= [];
  ngOnInit() {
    this.getHospitalName();
    this.getOneHospital();
    // makeLength(){
    //   is
    // }
  }
  // makeLength(){
  //   this.isEdit.length = this.inPatients.length;
  // }
   obj = {
    name: ""
  };
  editObj = {
    outDate: "",
    left: false
  };
  getOneHospital(){
    
    this.hospitalSrv.getOneHospital(this.obj)
    .subscribe(
      res=>{
        console.log(res);
        this.inPatients = res.response.inPatients;
        this.outPatients = res.response.outPatients;
      },
      err=>{
        console.log("Error while fetching the details of one hospital", err);
      }
    )
  }

  editIt(i){
    this.isEdit[i] = true;
  }

  getHospitalName(){
    this.acRoute.paramMap.subscribe(params=>{
      this.obj.name = params.get("name");
    });
  }

  edit(index){
    let editPatient = {
      index: index,
      body: this.inPatients[index]
    };
    this.hospitalSrv.edit(editPatient)
    .subscribe(
      res=>{
        console.log(res);
        this.router.navigate([`/manipalHospitals/${this.obj.name}`]);
      },
      err=>{
        console.log("Error while editing a patient's details");
        console.log(err);
      }
    );
  }

}
