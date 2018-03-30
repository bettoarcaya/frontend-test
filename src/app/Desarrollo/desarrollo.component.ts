import { Component, OnInit } from '@angular/core';
import { DataService } from '../servicios/data.service';

@Component({
  selector: 'app-desarrollo',
  templateUrl: './desarrollo.component.html',
  styleUrls: ['./desarrollo.component.css']
})
export class DesarrolloComponent implements OnInit {
  rows = [];
  kpis = [];
  test = 4;

  constructor(private data:DataService) { }

  ngOnInit() {
    
    this.rows = this.data.getSections();
    this.kpis = this.data.getKpis(0);
  }

  clk(row){
    for(let i = 0; i < this.rows.length; i++){
      if(this.rows[i].name == row){
        this.kpis = this.data.getKpis(i);
      }
    }
  }

  add(){
    this.kpis.push(this.kpis[0]);
  }

  onResize(event){
    const element = event.target.innerWidth;

    if (element < 950) {
      this.test = 3;
    }

    if (element > 950) {
      this.test = 4;
    }

    if (element < 750) {
      this.test = 2;
    }

    if (element < 650) {
      this.test = 1;
    }
  }

}