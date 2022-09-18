import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from './user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'user-module';
  userToUpdate = {
    id:"",
    name:"",
    type:"",
    password:""
  }
  userDetails = null as any;
  constructor(private userService: UserService){
    this.getuserDetails();
  }

  register(registerForm : NgForm){
    this.userService.registerUser(registerForm.value).subscribe(
      (resp) =>{
        console.log(resp);
        registerForm.reset();
        this.getuserDetails();
      },
      (err) =>{
        console.log(err);
      }
      );
  }
  getuserDetails(){
    this.userService.getUsers().subscribe(
      (resp) => {
        console.log(resp);
        this.userDetails = resp;
        
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteUsers(user: any){
    this.userService.deleteUser(user.id).subscribe(
      (resp) => {
        console.log(resp);},
      (err) => {
        console.log(err);
      }  
    );
  }

  updateUser(user: any){
    this.userService.updateUsers(this.userToUpdate).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    )
  }

  edit(user: any){
    this.userToUpdate = user;
  }
}
