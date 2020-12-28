import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { MoteurRechercheComponent } from './moteur-recherche/moteur-recherche.component';
import { AfficherImagesComponent } from './afficher-images/afficher-images.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';

@NgModule({
  declarations: [
    AppComponent,
    MoteurRechercheComponent,
    AfficherImagesComponent
  ],
  imports: [ BrowserModule, FormsModule, HttpClientModule,  IvyCarouselModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


