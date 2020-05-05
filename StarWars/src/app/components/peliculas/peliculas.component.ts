import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/models/movies';



@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [MoviesService]
})
export class PeliculasComponent implements OnInit {
  public title: string;
  public films: any;
  public movie: Movie; 
  public names: Array<string>;


  constructor(
    private _service: MoviesService 
  ) {
    this.title = "Peliculas";
    this.movie = new Movie('', '', '' ,'', '', '');
    this.names = [];
   }

  ngOnInit() {
    this._service.getMovies().subscribe(
      response => {
        let res: any;
        res = response; // Recolecta la respuesta de la API en la variable 'res'
        this.films = res.results; //Accede al arreglo 'results' que esta dentro de 'res' y lo guarda en films
        this.getNames(); //Crea un arreglo con el nombre de las peliculas 
        this.getMovie(2); //Por defecto inicia el componente con la pelicula que esta en la posicion '2' del arreglo 
      },
      error => {
        console.log(error);
      }
    ); 
  }

  getMovie(id: number){
    try {
      //Crea una nueva pelicula con el índice dado por parametro 
      this.movie = new Movie(
        this.films[id].title,
        this.films[id].episode_id,
        this.films[id].opening_crawl,
        this.films[id].director,
        this.films[id].producer,
        this.films[id].release_date);
    } catch(err) {
      console.log(err);
    }    
  }
  //Método para crear el arreglo de nombres
  getNames(){
    for(let i in this.films){
      this.names.push(this.films[i].title); //Este método es util para buscar la información de una pelicula despues de que el usuario haya ingresado el nombre de una nave en la barra de búsqueda 
    }
  }

  //Método para buscar la nave solicitada en la barra de búsqueda 
  onFindMovie(name: string){
    let index: number = this.names.indexOf(name); //Busca el indice de la nave solicitada en el arreglo de nombres 'names'
    if(index === -1){ //Si el nombre de la nave no esta en en el arreglo de nombres, mostrará una alerta 
      alert("Starship not found...");
    } else {
      this.getMovie(index); //Crea la nave que se mostrara en la vista 
    }
  }
}







  
   
    

