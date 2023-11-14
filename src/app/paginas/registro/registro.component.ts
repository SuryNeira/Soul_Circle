import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import {UsersService} from '../../users.service';
import{HttpClientModule} from '@angular/common/http'
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

// agregar al aceptar terminos y condiciones y colores 

export class RegistroComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private user:UsersService) {
    this.registerForm = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['', [Validators.required, Validators.minLength(6)]],
      checkbox: [false,Validators.requiredTrue]  
    },
    {Validator: ConfirmedValidator('password', 'confirmPassword') }
    )
  }
  // se puede ocupar Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])
  SaveData(){
    let userData = {
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      name:"nombre"
    };
    localStorage.setItem('local', JSON.stringify(userData));
    this.user.saveUserData(userData).subscribe((result)=>{
      console.log(result);
    })
  }
};


function ConfirmedValidator(controlName: string, matchingControlName: string){
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (!matchingControl) {
        return ; // No hay coincidencia, no se puede validar
      }
  
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
  }
}