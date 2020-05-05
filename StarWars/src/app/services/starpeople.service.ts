import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class StarpeopleService {

    public url: string;

    constructor(
        private _http: HttpClient
    ){
        this.url = "http://swapi.py4e.com/api/";
      }

    getStarpeople(){
        return this._http.get(this.url + "people/1/");
    }
}
