import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import {UsersService} from '../../users.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  title = 'web-inicio';

  constructor(private user: UsersService) {
  }

  ngOnInit(): void {
    initFlowbite();
  }
  
  Confirma() {   
    console.log("data[i]");
    this.user.getUser().subscribe((data: any) => {
      for (let i = 0; i<1; i++) {
         console.log(data[i]);
      } 
    });
  }
}
