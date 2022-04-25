import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AnamenuComponent } from './anamenu/anamenu.component';
import { SolmenuComponent } from './solmenu/solmenu.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AnamenuComponent,
    SolmenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] // Hnagi Companetten başlayacağını belirleyen yerdir
})
export class AppModule { }
