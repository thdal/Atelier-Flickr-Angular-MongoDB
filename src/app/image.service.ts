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

  getImages(p_text: string, p_gallerie: boolean, p_apiKey: string,
  p_dateMin: number, p_dateMax: number) {
    const url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&';
    var params = `api_key=${p_apiKey}&text=${p_text}&in_gallery=${p_gallerie}`;
    if(p_dateMin){
      const date_min = `&min_upload_date=${p_dateMin}`;
      params = params + date_min;
    }
    if(p_dateMax){
      const date_max = `&max_upload_date=${p_dateMax}`;
      params = params + date_max;

    }
    const format = `&format=json&nojsoncallback=1`;
    params = params + format;
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
