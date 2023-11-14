import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/perfil.service';
import { UsersService } from 'src/app/users.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  userProfileData: any;

  constructor(private perf: ProfileService,private user : UsersService) {}

  ngOnInit() {
    this.userProfileData = this.perf.getperfil();
  }
  borrar(){

    this.user.deleteUser(this.userProfileData.id).subscribe(()=>{
      console.log('se elimino el perfil');
    })
    
  }
}
