# Procédure d'installation

### npm install

Pour télécharger node_moduleset toutes les dépendances nécessaires à la génération de notre projet.

### npm install bootstrap --save 

### npm install jquery --save

On installe les deux framework et on ajoute les chemins dans le fichier de config.

=> Ajout dans angular.json

"styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],
"scripts": ["node_modules/jquery/dist/jquery.min.js"]


### npm i angular-responsive-carousel

On installe une bibliothèque pour gérer le carousel et l'affichage des images provenant de l'api flickr.

=> Ajout dans appModule.ts

import {IvyCarouselModule} from 'angular-responsive-carousel';

imports : [IvyCarouselModule]

## _> ng serve
