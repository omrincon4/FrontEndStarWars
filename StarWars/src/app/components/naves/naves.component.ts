import { Component, OnInit, ɵConsole } from '@angular/core';
import { StarshipsService } from 'src/app/services/starships.service';
import { Starship } from 'src/app/models/starship';

@Component({
  selector: 'app-naves',
  templateUrl: './naves.component.html',
  styleUrls: ['./naves.component.css'],
  providers: [StarshipsService]
})
export class NavesComponent implements OnInit {

  public title: string;
  public starships: any;
  public starship: Starship; // Usa el modelo 'starship' para usar sus atributos en mi componente 
  public names: Array<string>;

  constructor(
    private _service: StarshipsService 
  ) { 
    this.title = "Naves";
    this.starship = new Starship('', '', '' ,'', '', '');
    this.names = [];
  }

  ngOnInit() {
    this._service.getStarships().subscribe(
      response => {
        let res: any;
        res = response; // Recolecta la respuesta de la API en la variable 'res'
        this.starships = res.results; //Accede al arreglo 'results' que esta dentro de 'res' y lo guarda en starships
        this.getNames(); //Crea un arreglo con el nombre de las naves 
        this.getStarship(2); //Por defecto inicia el componente con la nave que esta en la posicion '2' del arreglo 
      },
      error => {
        console.log(error);
      }
    ); 
  }

  getStarship(id: number){
    try {
      //Crea una nueva nave con el índice dado por parametro 
      this.starship = new Starship(
        this.starships[id].name,
        this.starships[id].model,
        this.starships[id].manufacturer,
        this.starships[id].crew,
        this.starships[id].length,
        this.starships[id].consumables);
    } catch(err) {
      console.log(err);
    }    
  }
  
  //Método para buscar la nave solicitada en la barra de búsqueda 
  onFindStarship(name: string){
    let index: number = this.names.indexOf(name); //Busca el indice de la nave solicitada en el arreglo de nombres 'names'
    if(index === -1){ //Si el nombre de la nave no esta en en el arreglo de nombres, mostrará una alerta 
      alert("Starship not found...");
    } else {
      this.getStarship(index); //Crea la nave que se mostrara en la vista 
    }
  }

  //Método para crear el arreglo de nombres
  getNames(){
    for(let i in this.starships){
      this.names.push(this.starships[i].name); //Este método es util para buscar la información de una nave despues de que el usuario haya ingresado el nombre de una nave en la barra de búsqueda 
    }
  }
}
