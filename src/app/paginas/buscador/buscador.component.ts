import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import articulos from '../../../assets/data/arti.json';

interface News{
  imagen:string;
  titulo:string;
  descripcion:string;
}

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit { 
  buscarForm: FormGroup;
  newsList :News[] =articulos;
  coinciden :News[] =[];


  constructor(private fb: FormBuilder) {
    this.buscarForm = fb.group({
      buscar: ['']
    });
  }
  ngOnInit() {
  }
  SaveData() {
     let contador =0;
     for(let i =0;i<this.newsList.length;i++)
     {
        if(this.newsList[i].titulo.includes(this.buscarForm.value.buscar))
        {
          this.coinciden[contador]=this.newsList[i];
          contador++;
        }
     }
     //console.log(this.coinciden[0].descripcion);
}
}