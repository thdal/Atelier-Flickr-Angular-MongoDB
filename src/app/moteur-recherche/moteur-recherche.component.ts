import { Component, OnInit } from '@angular/core';
import {ImageService} from '../image.service';
import DateTimeFormat = Intl.DateTimeFormat;


@Component({
  selector: 'app-moteur-recherche',
  templateUrl: './moteur-recherche.component.html',
  styleUrls: ['./moteur-recherche.component.css'],
})
export class MoteurRechercheComponent implements OnInit {

  images = [];

  p_text: string;
  p_dateMin: Date;
  p_dateMax: Date;
  p_gallerie: boolean;
  p_apiKey: string;


  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.p_gallerie = false;
  }

  callService(): void{
    if(this.p_dateMin){
      var dateMin = new Date(this.p_dateMin).getTime()/1000;
    }
    if(this.p_dateMax){
      var dateMax = new Date(this.p_dateMax).getTime()/1000;
    }
    this.p_text.toLocaleLowerCase();
    if (this.p_text && this.p_text.length > 0) {
      this.imageService.getImages(this.p_text, this.p_gallerie, this.p_apiKey, dateMin, dateMax)
        .toPromise()
        .then(res => {
          this.images = res;
        });
    }
  }



}
