import { Inject, Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Observable, Subject} from 'rxjs';


export interface FlickrPhoto {
  farm: string;
  id: string;
  secret: string;
  server: string;
  title: string;
}

export interface FlickrOutput {
  photos: {
    photo: FlickrPhoto[];
  };
}

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private subject = new Subject<any>();
  prevKeyword: string;
  currPage = 1;


  constructor(private http: HttpClient  ) {  }

  getImages(keyword: string) {
    this.prevKeyword = keyword;
    const url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&';
    const params = `api_key=74ef634e0fdfca8b9ecc3ad2b69ce8c2&text=${keyword}&format=json&nojsoncallback=1`;

    return this.http.get(url + params).pipe(map((res: FlickrOutput) => {
      const urlArr = [];
      const imagesObject = [];

      res.photos.photo.forEach((ph: FlickrPhoto) => {
        const photoObj = {
          url: `https://farm${ph.farm}.staticflickr.com/${ph.server}/${ph.id}_${ph.secret}`,
          title: ph.title
        };
        urlArr.push(photoObj);
        });
      urlArr.forEach(function(item){
        imagesObject.push({path: item.url + '_m.jpg'})
      })
      this.subject.next({ tab: imagesObject });
      return imagesObject;
    }));
  }

  getImagesSubject(): Observable<any> {
    return this.subject.asObservable();
  }

}
