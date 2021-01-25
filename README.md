# Atelier Flickr

Réaliser un moteur de recherche de photos qui exploite l'API de Yahoo Flickr ( https://wwww.flickr.com/services/api/), HTML/CSS (Bootstrap optionnel) & Angular.


# Procédure d'installation

### npm install

Pour initialiser et télécharger node_modules et ce qu'il contient.

### npm install bootstrap --save 

### npm install jquery --save

On installe les deux frameworks officiels de Bootstrap et Jquery et on ajoute les chemins dans le fichier de config.

=> Ajout dans angular.json (Si les lignes n'y sont pas déjà)

"styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],
"scripts": ["node_modules/jquery/dist/jquery.min.js"]


### npm i angular-responsive-carousel

On installe une bibliothèque qui facilitera l'affichage des images provenant de l'api flickr dans un carousel simple d'utilisation et ergonomique.

Plus d'infos et doc sur la bibliothèque : https://www.npmjs.com/package/angular-responsive-carousel

=> Ajout dans appModule.ts (Si les lignes n'y sont pas déjà)

import {IvyCarouselModule} from 'angular-responsive-carousel';

imports : [IvyCarouselModule]

### _> ng serve

Alors on peut lancer l'application.
