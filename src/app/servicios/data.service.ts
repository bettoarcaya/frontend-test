import {Injectable} from "@angular/core";
@Injectable()
export class DataService{

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
  public constructor(){}

  public getSections(){
    return this.menuRows.sections;
  }

  public getKpis(index){
    return this.menuRows.sections[index].kpis;
  }


}

