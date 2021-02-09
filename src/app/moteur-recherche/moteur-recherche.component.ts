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
  Repdata = null;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.p_gallerie = false;
  }



  // On fait un premier appel à notre api afin de vérifier la présence ou non dans le cache
  checkCacheInMongo(): void{
    //On appel la méthode get, elle se fera sur le paramètre de la recherche (sport, cinema etc..)
    this.imageService.getCacheFlickr(this.p_text).subscribe(
      value =>
        this.Repdata = value,
      err => console.log(err),
      () =>
        this.setAffichage(this.Repdata)
    );
  }

  // si on a du cache dans notre base mongo on met à jour la vue,
  // sinon on appel l'api flickr
  setAffichage(data){
    // Rien dans la base on appel l'api flickr
    if(!data){
      this.callApiFlickrAndWriteCache();
      // Sinon on met à jours notre vue avec les données en cache
    }else{
      this.imageService.updateTabImgs(data.imgs)
    }
  }

  // La fonction sans accès à mongodb.
  callApiFlickr(): void{
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

  // La fonction qui permet d'écrire le cache si notre base mongo est configuré.
  // Une seule ligne est en fait ajoutée (postMongo(...))
  callApiFlickrAndWriteCache(): void{
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
          this.postMongo(this.images, this.p_text);
        });
    }
  }

  //On sauvegarde les données en post dans la base mongo
  postMongo(tabImages, paramRecherche): void{
    this.imageService.postCacheFlickr(tabImages, paramRecherche).subscribe(
      value =>
       err => console.log(err),
      () =>
        console.log("postdone!")
    );
  }



}
