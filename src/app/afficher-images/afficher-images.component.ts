import { Component, OnInit } from '@angular/core';
import {ImageService} from '../image.service';
import {Subscription} from 'rxjs';
import * as $ from "jquery"


@Component({
  selector: 'app-afficher-images',
  templateUrl: './afficher-images.component.html',
  styleUrls: ['./afficher-images.component.css']
})
export class AfficherImagesComponent implements OnInit {
  images = [];

  subscription: Subscription;

  constructor(private imageService: ImageService) {
    this.subscription = this.imageService.getImagesSubject().subscribe(objImgs => {
      if (objImgs) {
        this.images = objImgs.tab;
      } else {
        // clear messages when empty message received
        this.images = [];
      }
    });
  }

  ngOnInit(): void {  }
}


