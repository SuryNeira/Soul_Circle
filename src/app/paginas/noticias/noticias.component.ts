import { Component,OnInit } from '@angular/core';
import articulos from '../../../assets/data/arti.json'

interface News{
  imagen:string;
  titulo:string;
  descripcion:string;
}

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit{
  
  newsList :News[] =articulos;
  constructor(){}
  ngOnInit(): void {
      
    }
}

