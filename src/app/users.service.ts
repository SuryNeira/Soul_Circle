import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { json } from 'express';

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
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // Otros encabezados según sea necesario
      })
    };
    console.log(JSON.stringify(data));
    return this.http.put<any>(`http://localhost:4000/api/usuarios/${id}`,JSON.stringify(data),httpOptions).subscribe(
      response => {
        console.log('Respuesta del servidor:', response);
      },
      error => {
        console.error('Error en la solicitud:', error);
      });
  }
  
}
