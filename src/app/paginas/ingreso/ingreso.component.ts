import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UsersService} from '../../users.service';
import { ProfileService } from 'src/app/perfil.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-ingreso",
  templateUrl: "./ingreso.component.html",
  styleUrls: ["./ingreso.component.css"],
})
export class IngresoComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private user: UsersService,
    private prof: ProfileService,
    private router: Router
  ) {
    this.loginForm = fb.group({
      email: ["", [Validators.required, Validators.email]],
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
          this.prof.setPerfil(data);
          localStorage.setItem('local', JSON.stringify(data));
          this.router.navigate(["/perfil"]);
        }   
      }
    });
  }
}



