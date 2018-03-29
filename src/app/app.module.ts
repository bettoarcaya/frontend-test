import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpModule} from "@angular/http";
import {Routes, RouterModule} from "@angular/router";
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DesarrolloComponent } from './Desarrollo/desarrollo.component';
import { AdministracionComponent } from './Administracion/administracion.component';
import { SeguridadComponent } from './Seguridad/seguridad.component';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule
} from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from "@angular/flex-layout";
import {HttpClientModule} from '@angular/common/http';
import {DataService} from "./servicios/data.service";

const appRoutes: Routes = [
  {path:'', component: DesarrolloComponent},
  {path:'administracion', component: AdministracionComponent},
  {path:'seguridad', component: SeguridadComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    DesarrolloComponent,
    AdministracionComponent,
    SeguridadComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    HttpModule,
    MatGridListModule,
    RouterModule.forRoot(appRoutes),
    FlexLayoutModule,
    HttpClientModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
