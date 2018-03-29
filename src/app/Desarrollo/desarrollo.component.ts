import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desarrollo',
  templateUrl: './desarrollo.component.html',
  styleUrls: ['./desarrollo.component.css']
})
export class DesarrolloComponent implements OnInit {
  rows = [];
  kpis = [];
  
  menuRows = {
    menu: ["Desarrollo", "Administración", "Seguridad"],
    sections: [
      {
        name: "Relevamiento",
        kpis: [
          { name: "Documentos", limit: 4, unit: "u", value: 7},
          { name: "Desvíos", limit: 5, unit: "%", value: 14}
        ]
      },
      {
        name: "Desarrollo",
        kpis: [
          { name: "Desvíos", limit: 20, unit: "u", value: 14}
        ]
      },
      {
        name: "Implementación",
        kpis: [
          { name: "Implementaciones", limit: 20, unit: "u", value: 7},
          { name: "Tasa de Reimpl.", limit: 10, unit: "%", value: 11},
          { name: "Lorem", limit: 20, unit: "%", value: 14},
          { name: "Ipsum", limit: 5, unit: "%", value: 4},
          { name: "Lorem", limit: 7, unit: "%", value: 6},
        ]
      },
  
    ]
  }



  constructor() { }

  ngOnInit() {
    this.rows = this.menuRows.sections;
    this.kpis = this.rows[0].kpis;
    /*this.fetch( (data) => {
      console.log(data);
    });*/
  }

  clk(row){
    for(let i = 0; i < this.rows.length; i++){
      if(this.rows[i].name == row){
        this.kpis = this.rows[i].kpis;
      }
    }
  }

  add(){
    this.kpis.push(this.kpis[0]);
  }


  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/data1.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }



}