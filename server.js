var express = require ('express');
var path = require ('path');
var bodyParser = require ('body-parser');
var mongo = require ('mongoose');
// On appel le fichier qui fait la passerelle avec mongodb
var flickr = require('./cacheFlickrSchema.js');

var host = 'localhost';
var port = '27017';
var dbName = 'madb';

// On se connecte à notre base mongo avec les bons paramètres
var db = mongo.connect('mongodb://'+host+':'+port +'/'+dbName, function(err, response){
  if(err){
    console.log("Erreur de connexion à mongodb")
    console.log(err); }
  else{
    //console.log('Connected to' + db, '+', response)
    console.log('Connecté à la base :' + ' ' +dbName);
    ;}
});

var app = express()
app.use(bodyParser());
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({extended: true}));

app.use(function (req, res, next){
  res.setHeader('Access-Control-Allow-Origin','http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers','X-Requested-With, content-type');
  res.setHeader('Access-Control-Allow-Credentials',true);
  next();
});

/****************************************************************
 * Méthode get ici on récupére notre objet dans la base mongoDB *
 ****************************************************************/

app.get("/api/get/cacheFlickr",function (req, res){
  // Ici on récupère le paramètre de recherche provenant de l'app angular
  // cela nous servira à regarder en base si on a des données en cache.
  var name = req.query.name
  flickr.findOne({'name': name}, function(err, data){
    if(err){
      console.log("Erreur dans le get")
      res.send(err);
    }else{
      console.log("Get ->")
      res.send(data);
    }
  });
})

/***********************************************************************
 * Méthode post ici on fait les insert/update dans notre base mongoDB  *
 ***********************************************************************/

app.post("/api/post/cacheFlickr", function (req, res){
  // On init un schema avec nos valeurs
  var newFlickr = new flickr({
    name: req.body.name,
    imgs: req.body.imgs
  });
  // Enfin on fait notre enregistrement en base
  newFlickr.save(function(err, objBis){
    if(err){
      console.log("Erreur dans le post")
      res.send(err);
    }
    else{
      console.log("Post ->")
      res.send({data:"Record has been Inserted...!!"});
    }
  });
})

app.listen(8080, function(){
  console.log("\r")
  console.log("**************************************************")
  console.log('*       Notre api écoute sur le port 8080!       *');
  console.log("**************************************************")
  console.log("\r")
})

