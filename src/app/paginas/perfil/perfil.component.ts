import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../users.service';
import { ProfileService } from 'src/app/perfil.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  
  userProfileData: any;
  adminForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private user: UsersService,
    private perf: ProfileService,
    private router: Router
  ) {
    this.adminForm = fb.group({
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {
    this.userProfileData = this.perf.getperfil();
  }

  borrar() {
    this.user.deleteUser(this.userProfileData.id).subscribe(() => {
      console.log('se elimino el perfil');
    });
  }

  Confirma() {
    console.log('a');
  }
}