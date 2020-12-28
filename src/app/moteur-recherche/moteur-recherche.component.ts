import { Component, OnInit } from '@angular/core';
import {ImageService} from '../image.service';


@Component({
  selector: 'app-moteur-recherche',
  templateUrl: './moteur-recherche.component.html',
  styleUrls: ['./moteur-recherche.component.css'],
})
export class MoteurRechercheComponent implements OnInit {

  images = [];

  p_text: string;
  p_dateMin: string;
  p_dateMax: string;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
  }

  callService(): void{
    this.p_text.toLocaleLowerCase();
    if (this.p_text && this.p_text.length > 0) {
      this.imageService.getImages(this.p_text)
        .toPromise()
        .then(res => {
          this.images = res;
        });
    }
  }



}
