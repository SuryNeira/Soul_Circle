import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UsersService} from '../../users.service';
import { ProfileService } from 'src/app/perfil.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})

export class EditarPerfilComponent implements OnInit {
  loginForm: FormGroup;
  userProfileData: any;
  locales: any;

  constructor(
    private fb: FormBuilder,
    private user: UsersService,
    private perf: ProfileService,
    private router: Router
  ) {
    this.loginForm = fb.group({
      nombre: ["", [Validators.required, Validators.maxLength(20)]],
      descipcion: ["", [Validators.required, Validators.maxLength(200)]],
      genero: ["", [Validators.required, Validators.maxLength(10)]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {
  }
  
  Confirma() {
    this.userProfileData = localStorage.getItem('local');
    this.userProfileData=JSON.parse(this.userProfileData);
    let userData = {
      usuario:this.loginForm.value.nombre,
      contraseña: this.loginForm.value.password,
      descripcion:this.loginForm.value.descipcion,
      genero:this.loginForm.value.genero
    };
    this.userProfileData.usuario=userData.usuario;
    this.userProfileData.contraseña=userData.contraseña;
    this.userProfileData.descripcion=userData.descripcion;
    this.userProfileData.genero=userData.genero;
    console.log(this.userProfileData);
    this.user.updateUser(this.userProfileData[0].id,userData);
    localStorage.setItem('local', JSON.stringify(this.userProfileData));
    this.router.navigate(["/perfil"]);
  }
}