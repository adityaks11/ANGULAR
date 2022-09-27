import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CollegeService {

  API='http://localhost:8084'
  constructor(private http : HttpClient) { }

  public registerCollege(collegeData:any){
    return this.http.post(this.API + '/registerCollege', collegeData);
  }

  public getColleges(){
    return this.http.get(this.API + '/getColleges');
  }

  public deleteCollege(id: any){
    return this.http.delete(this.API + '/deleteCollege?id=' + id);
  }

  public updateCollege(college: any){
    return this.http.put(this.API + '/updateCollege', college);
  }
}
