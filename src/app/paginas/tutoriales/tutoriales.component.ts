import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import articulos from '../../../assets/data/arti.json';


interface News{
  imagen:string;
  titulo:string;
  descripcion:string;
  comentarios?: { usuario: string; comentario: string }[];
}

@Component({
  selector: "app-tutoriales",
  templateUrl: "./tutoriales.component.html",
  styleUrls: ["./tutoriales.component.css"],
})
export class TutorialesComponent implements OnInit {
  newsList :News[] =articulos;
  coinciden :News[] =[];
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const title = params['title'];
      
      // You can use 'title' here in your logic


      let contador =0;
      for(let i =0;i<this.newsList.length;i++)
      {
         if(this.newsList[i].titulo.includes(title))
         {
           this.coinciden[contador]=this.newsList[i];
           contador++;
         }
      }








    });
  }
}
