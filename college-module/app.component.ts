import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CollegeService } from './college.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'college-module';
  collegeDetails=null as any;
  collegeToUpdate = {
    id:"",
    collegeadmin:"",
    collegename:"",
    location:""
  };
  
  constructor(private collegeService : CollegeService){
    this.getcollegeDetails();
  }

  register(registerForm : NgForm){
    this.collegeService.registerCollege(registerForm.value ).subscribe(
      (resp) =>{
        console.log(resp);
        registerForm.reset();
        this.getcollegeDetails();
      },
      (err) =>{
        console.log(err);
      }
    );
  }

  getcollegeDetails(){
    this.collegeService.getColleges().subscribe(
      (resp) =>{
        console.log(resp);
        this.collegeDetails = resp;
      },
      (err) =>{
        console.log(err);
      }   
    );
  }

  deleteCollege(college: any){
    this.collegeService.deleteCollege(college.id).subscribe(
      (resp) =>{
        console.log(resp);
        this.getcollegeDetails();
      },
      (err) =>{
        console.log(err);
      }
    );
  }

  updateCollege(){
    this.collegeService.updateCollege(this.collegeToUpdate).subscribe(
      (resp) =>{
        console.log(resp);
      },
      (err) =>{
        console.log(err);
      }
    );
  }

  edit(college: any){
    this.collegeToUpdate = college;
  }
}
