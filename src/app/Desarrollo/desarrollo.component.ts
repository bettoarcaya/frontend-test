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

}