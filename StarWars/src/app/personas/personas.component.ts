import { Component, OnInit } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  public empData: Object;
  public temp: Object = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((resp: Response) => {
      this.empData = resp;
      this.temp = true;
    });
  }

}
