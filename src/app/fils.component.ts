import {Component; OnInit, Input, Output, EventEmitter} from '@angular/core';

import { ImgService } from '../img.service';
import { ImageService } from './image.service';

@Component({
selector: 'app-fils',
templatesUrl: './fils.component.html',
styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {

    tabImgs: string[] = [];

    @Input() indexFils: number;
    @Output() tailletable = new EventEmitter<number>();


    constructor(private ImageService: ImageService){ }

    ngOnInit(): void{
        this.ImageService.getImgs().subscribe(
            data =>{
                this.tabImgs = data;
                this.tailletable.emit(this.tabImgs.length);
            }
        );
        console.log(this.ImageService.getImgs())
    }
}
