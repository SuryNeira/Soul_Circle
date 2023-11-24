import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  url = 'http://localhost:4000/api/usuarios';
  getUser(){
    return this.http.get(this.url);
  }
  getUserMail(mail:any){
    return this.http.get(`http://localhost:4000/api/usuarios/${mail}`)
  }
  saveUserData(data: any){
    return this.http.post(this.url, data);
  }
  deleteUser(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
  updateUser(id: number,data: any) {
    console.log(data);
    return this.http.put(`http://localhost:4000/api/usuarios/${id}`,JSON.stringify(data))
  }
}
