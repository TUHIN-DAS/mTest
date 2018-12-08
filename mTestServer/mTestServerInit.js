/* mTest node server init file 

PORT : 8013  -- default port

Note : Avoid frequent changes to server module.

Do's 
1. Define the services only.
2. Good naming convention. (lower case with _ separated..)

Don't
1. keep business login here.
2. keep unused services ASAP.
3. Keep dirty code on every change cycle.

*/


var express = require('express');
var app = express();
var fs = require("fs");

app.get('/servicename', function (req, res) {
   
      res.end( 'your response');
   });

var server = app.listen(8013, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("mTest server started on ", host, port)
})
