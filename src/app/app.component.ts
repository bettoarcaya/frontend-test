import { Component } from '@angular/core';
import { DataService } from './servicios/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  menu;

  public constructor(private data:DataService){}
  ngOnInit(){
    this.menu = this.data.getMenu();
  }

}
