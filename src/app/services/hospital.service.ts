import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {
  private getHospitals = "http://localhost:2000/api/hospitals";
  private getHospital = "http://localhost:2000/api/hospital";
  private addOnePatient = "http://localhost:2000/api/addPatient";
  private editOnePatient = "http://localhost:2000/api/editPatient";
  constructor(private http: HttpClient) { }

  getAllHospitals(){
    return this.http.get<any>(this.getHospitals);
  }

  getOneHospital(obj){
    return this.http.post<any>(this.getHospital, obj);
  }

  addPatient(obj){
    return this.http.post<any>(this.addOnePatient, obj);
  }

  edit(obj){
    return this.http.post<any>(this.editOnePatient, obj);
  }
}
