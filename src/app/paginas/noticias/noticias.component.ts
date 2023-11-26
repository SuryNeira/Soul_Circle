import { Component, OnInit } from "@angular/core";
import articulos from "../../../assets/data/arti.json";
import { Router } from "@angular/router";

interface News {
  imagen: string;
  titulo: string;
  descripcion: string;
}

@Component({
  selector: "app-noticias",
  templateUrl: "./noticias.component.html",
  styleUrls: ["./noticias.component.css"],
})
export class NoticiasComponent implements OnInit {
  newsList: News[] = articulos;

  constructor(private router: Router) {
    // Constructor logic if needed
  }

  ngOnInit(): void {
    // Initialization logic if needed
  }

  mostrar(titulo: any) {
     // Log the 'titulo' parameter
    // Navigate to '/tutoriales' route with 'titulo' as a query parameter
    this.router.navigate(['/foro'], { queryParams: { title: titulo } });
  }
}