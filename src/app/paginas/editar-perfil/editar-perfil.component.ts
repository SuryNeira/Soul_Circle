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

  constructor(
    private fb: FormBuilder,
    private user: UsersService,
    private prof: ProfileService,
    private router: Router
  ) {
    this.loginForm = fb.group({
      email: ["", [Validators.required, Validators.email]],
      nombre: ["", [Validators.required, Validators.maxLength(20)]],
      descipcion: ["", [Validators.required, Validators.maxLength(200)]],
      genero: ["", [Validators.required, Validators.maxLength(10)]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {}

  Confirma() {
    this.user.getUserMail(this.loginForm.value.email).subscribe((data: any) => {
      if (data[0].mail == this.loginForm.value.email) {
        if (data[0].contraseña == this.loginForm.value.password)
        {
          console.log("Datos coinciden");
          this.prof.setPerfil(data[0]);
          this.router.navigate(["/perfil"]);
        }   
      }
    });
  }
}