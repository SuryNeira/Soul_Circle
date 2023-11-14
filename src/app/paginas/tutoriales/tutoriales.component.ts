import { Component,OnInit } from '@angular/core';
import articulos from '../../../assets/data/tutorial.json'

interface News{
  titulo:string;
  url:string;
  descripcion:string;
}
@Component({
  selector: 'app-tutoriales',
  templateUrl: './tutoriales.component.html',
  styleUrls: ['./tutoriales.component.css']
})

export class TutorialesComponent implements OnInit{
  newsList :News[] =articulos;
    constructor(){}

  apiLoaded = false;
  ngOnInit() {
    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }
}

