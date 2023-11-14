import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  url = 'http://localhost:3000/Users';
  getUser(){
    return this.http.get(this.url);
  }
  saveUserData(data: any){
    console.log(data);
    return this.http.post(this.url, data);
  }
  deleteUser(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
