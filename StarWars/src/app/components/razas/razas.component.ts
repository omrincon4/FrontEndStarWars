import { Component, OnInit } from '@angular/core';
import { SpeciesService } from 'src/app/services/species.service';
import { Specie } from 'src/app/models/specie';

@Component({
  selector: 'app-razas',
  templateUrl: './razas.component.html',
  styleUrls: ['./razas.component.css'],
  providers: [SpeciesService]
})
export class RazasComponent implements OnInit {

  public title: string;
  public species: any;
  public specie: Specie; // Usa el modelo 'specie' para usar sus atributos en mi componente 
  public names: Array<string>;

  constructor(
    private _service: SpeciesService 
  ) { 
    this.title = "Razas";
    this.specie = new Specie('', '', '' ,'', '', '');
    this.names = [];
  }

  ngOnInit() {
    this._service.getSpecies().subscribe(
      response => {
        let res: any;
        res = response; // Recolecta la respuesta de la API en la variable 'res'
        this.species = res.results; //Accede al arreglo 'results' que esta dentro de 'res' y lo guarda en species
        this.getNames(); //Crea un arreglo con el nombre de las razas 
        this.getSpecie(2); //Por defecto inicia el componente con la nave que esta en la posicion '2' del arreglo 
      },
      error => {
        console.log(error);
      }
    ); 
  }

  getSpecie(id: number){
    try {
      //Crea una nueva raza con el índice dado por parametro 
      this.specie = new Specie(
        this.species[id].name,
        this.species[id].language,
        this.species[id].classification,
        this.species[id].average_height,
        this.species[id].designation,
        this.species[id].average_lifespan);
    } catch(err) {
      console.log(err);
    }    
  }
  
  //Método para buscar la raza solicitada en la barra de búsqueda 
  onFindSpecie(name: string){
    let index: number = this.names.indexOf(name); //Busca el indice de la raza solicitada en el arreglo de nombres 'names'
    if(index === -1){ //Si el nombre de la raza no esta en en el arreglo de nombres, mostrará una alerta 
      alert("Specie not found...");
    } else {
      this.getSpecie(index); //Crea la raza que se mostrara en la vista 
    }
  }

  //Método para crear el arreglo de nombres
  getNames(){
    for(let i in this.species){
      this.names.push(this.species[i].name); //Este método es util para buscar la información de una nave despues de que el usuario haya ingresado el nombre de una nave en la barra de búsqueda 
    }
  }
}