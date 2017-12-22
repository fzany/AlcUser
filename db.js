var mongoose = require("mongodb").MongoClient;
mongoose.connect("mongodb://fzanymongol:Cwg8ErXXvzOgdKCkyIb71lIv5ZMxteKMaPr1sb2oD2PbjTOAaDoPUjrlkhUQFaFR5L9Yo59MO3NzgpT6pIsUvQ==@fzanymongol.documents.azure.com:10255/?ssl=true", function (err, db) {
  db.close();
});



/*var mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL, { useMongoClient: true });*/

