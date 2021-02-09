# Atelier Flickr

Réaliser un moteur de recherche de photos qui exploite l'API de Yahoo Flickr ( https://wwww.flickr.com/services/api/), HTML/CSS (Bootstrap optionnel) & Angular.
![alt text](https://github.com/thdal/AtelierFlickr/blob/master/AtelierFlickr.png)

# Procédure d'installation

# Partie 1 API FLICKR

### npm install

Pour initialiser et télécharger node_modules et ce qu'il contient.

### npm install bootstrap --save 

### npm install jquery --save

On installe les deux frameworks officiels de Bootstrap et Jquery.

=> Ajout dans angular.json (Si les lignes n'y sont pas déjà)

"styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],
"scripts": ["node_modules/jquery/dist/jquery.min.js"]


### npm i angular-responsive-carousel

Installation de la bibliothèque d'un carousel simple d'utilisation.

Plus d'infos et doc sur la bibliothèque : https://www.npmjs.com/package/angular-responsive-carousel

=> Ajout dans appModule.ts (Si les lignes n'y sont pas déjà)

import {IvyCarouselModule} from 'angular-responsive-carousel';

imports : [IvyCarouselModule]

### _> ng serve

Alors on peut lancer l'application.

_A noter : L'application est actuellement configurée pour fonctionner avec une base mongoDB, pour se servir uniquement de l'appel à l'API flickr il vous faudra uniquement ouvrir le fichier "moteur-recherche.component.html" décommenter la ligne 48 et commenter la ligne 49._

# Partie 2 MongoDB

Il nous faudra d'abord installer les bibliothèques suivantes :

### npm install express — save

### npm install mongoose — save

### npm install body-parser --save

### install --save rxjs@6 rxjs-compat@6

La dernière commande permet de résoudre un problème de compatibilité.

Actuellement l'application est paramétrée pour se connecter à une database mongo du nom de "madb" sur le port 27017 en 127.0.0.1 et fera les get et les post sur une collection du nom de "flickrCache". 

Pour paramétrer l'accès à votre base de données rendez vous dans le fichier **server.js** lignes 8,9 et 10. Vous pourrez aussi modifier le fichier **cacheFlickrSchema**.js ligne 10, le premier paramètre vous permettra de changer le nom de votre collection.

La collection sera créée lors de votre premier insert, vous n'aurez pas à la paramétrer préalablement côté mongoDB.

### _> node serve.js

Alors on peut lancer le serveur node. 

(Sans oublier d'avoir lancé votre service mongoDB dans un terminal avec la commande mongod ainsi que votre appli angular avec la commande ng serve, en ayant bien suivi **la procèdure d'installation** de la **partie 1**).


