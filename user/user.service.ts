import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API = "http://localhost:8081"
  constructor(private http : HttpClient) { }

  public registerUser(UserData:any){
    return this.http.post(this.API + '/registerUser', UserData);
  }

  public getUsers(){
    return this.http.get(this.API + '/getUsers');
  }

  public deleteUser(id: any){
    return this.http.delete(this.API + '/deleteUser?id=' + id);
  }

  public updateUsers(user: any){
    return this.http.put(this.API + '/updateUsers', user);
  }
}
