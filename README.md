# Installation

npm install bootstrap --save 

npm install jquery --save

=> Ajout dans angular.json

"styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],
"scripts": ["node_modules/jquery/dist/jquery.min.js"]


npm i angular-responsive-carousel

=> Ajout dans appModule.ts

import {IvyCarouselModule} from 'angular-responsive-carousel';

imports : [IvyCarouselModule]

> > > ng serve
