import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
declare var $;

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  @ViewChild('dataTable', {static: true}) table: ElementRef;
  dataTable: any;

  constructor() { }

  ngOnInit():void {
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.dataTable();
  }

}
