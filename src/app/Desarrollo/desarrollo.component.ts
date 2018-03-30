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
  kps = 4;
  categories = 4;
  active;
  menu = false;

  constructor(private data:DataService) { }

  ngOnInit() {
    
    this.rows = this.data.getSections();
    this.kpis = this.data.getKpis(0);
    this.active = this.rows[0].name;
  }

  clk(row){
    this.active = row;
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

    if (element > 950) {
      this.kps = 4;
      this.categories = 4;
    }

    if (element < 950) {
      this.kps = 3;
      this.categories = 3;
    }

    if (element < 750) {
      this.kps = 2;
      this.categories = 2;
    }

    if (element < 650) {
      this.kps = 1;
      this.categories = 1;
      this.menu = true;
    }
  }

}