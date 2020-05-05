import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public title: string;

  constructor() {
    this.title = "POLITECNICO GRAN COLOMBIANO 2020";
  }

  ngOnInit() {
  }

}
