import { Component, OnInit  } from '@angular/core';
import { PlanetasService } from 'src/app/services/planetas.service';
import { Planet } from 'src/app/models/planet';

@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.component.html',
  styleUrls: ['./planetas.component.css'],
  providers: [PlanetasService]
})
export class PlanetasComponent implements OnInit {

  public title: string;
  public planets: any;
  public planet: Planet; // Usa el modelo 'Planetas' para usar sus atributos en mi componente 
  public names: Array<string>;

  constructor(
    private _service: PlanetasService 
  ) { 
    this.title = "Planetas";
    this.planet = new Planet('', '', '' ,'', '', '');
    this.names = [];
  }

  ngOnInit() {
    this._service.getPlanets().subscribe(
      response => {
        let res: any;
        res = response; // Recolecta la respuesta de la API en la variable 'res'
        this.planets = res.results; //Accede al arreglo 'results' que esta dentro de 'res' y lo guarda en planetas
        this.getNames(); //Crea un arreglo con el nombre de los planetas
        this.getPlanet(2); //Por defecto inicia el componente con el planeta que esta en la posicion '2' del arreglo 
        console.log(this.planets);
      },
      error => {
        console.log(error);
      }
    ); 
  }

  getPlanet(id: number){
    try {
      //Crea un nuevo planeta con el índice dado por parametro 
      this.planet = new Planet(
        this.planets[id].name,
        this.planets[id].rotation_period,
        this.planets[id].orbital_period,
        this.planets[id].diameter,
        this.planets[id].climate,
        this.planets[id].gravity);
    } catch(err) {
      console.log(err);
    }    
  }
  
  //Método para buscar el planeta solicitado en la barra de búsqueda 
  onFindPlanet(name: string){
    let index: number = this.names.indexOf(name); //Busca el indice del planeta solicitado en el arreglo de nombres 'names'
    if(index === -1){ //Si el nombre del planeta no esta en en el arreglo de nombres, mostrará una alerta 
      alert("Planet not found...");
    } else {
      this.getPlanet(index); //Crea el planeta que se mostrara en la vista 
    }
  }

  //Método para crear el arreglo de nombres
  getNames(){
    for(let i in this.planets){
      this.names.push(this.planets[i].name); //Este método es util para buscar la información de un planeta despues de que el usuario haya ingresado el nombre de una nave en la barra de búsqueda 
    }
  }
}
