import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SpeciesService {

    public url: string;

    constructor(
        private _http: HttpClient
    ){
        this.url = "http://swapi.py4e.com/";
      }

    getSpecies(){
        return this._http.get(this.url + "species/");
    }
}
