import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { MovielistComponent } from './components/movielist/movielist.component';
import { AddmovieComponent } from './components/addmovie/addmovie.component';
import { ViewmovieComponent } from './components/viewmovie/viewmovie.component';
import { UpdatemovieComponent } from './components/updatemovie/updatemovie.component';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    MovielistComponent,
    AddmovieComponent,
    ViewmovieComponent,
    UpdatemovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
