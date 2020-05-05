import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class MoviesService {

    public url: string;

    constructor(
        private _http: HttpClient
    ){
        this.url = "hhttp://swapi.py4e.com/";
      }

    getMovies(){
        return this._http.get(this.url + "films/");
    }
}
