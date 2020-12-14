import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moteur-recherche',
  templateUrl: './moteur-recherche.component.html',
  styleUrls: ['./moteur-recherche.component.css']
})
export class MoteurRechercheComponent implements OnInit {

  private URL: string = "https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=5e6cf683ffcfca04200286e429c5b2de&tags=&format=rest";

  constructor() { }

  ngOnInit(): void {
  }

}
