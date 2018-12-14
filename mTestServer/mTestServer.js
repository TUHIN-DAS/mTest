/* mTest node server init file */


var express = require('express');
var app = express();
var fs = require("fs");
var dbQuery = require("./databaseManager.js");
var mysql = require('mysql');
var crypto = require('crypto');
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.post('/registeruser', function(req, res) { 

    var name = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    var phone = req.body.phone;
	
    var id = generateSecureId(password);
    var query = "insert into mtest_r_users values ('"+id+"','"+name+"','"+password+"','"+ email +"',"+phone+")";
    handleRequest(query,res,executeQuery);
	
});




app.get('/getusers', function(req, res){
	  var query = "select * from mtest_r_users";
	  handleRequest(query,res,executeQuery);
});  

app.get('/deleteuser*', function(req, res) {

    var id = req.params[0].split("/").join("");
    var query = "delete from mtest_r_users where id = '"+id+"'";
	console.log(query);
    handleRequest(query,res,executeQuery);
});

app.post('/login', function(req, res) {


    /* login can be done using any of the following information 
	   1. name  when neither email or phone go for name.
	   2. email  check for value to be email.
	   3. phone  check for value to be number.
    */
    console.log(req.body);
    var name = req.body.username;
    var password = req.body.password;
	
    var query = "select id,name,email,phone from mtest_r_users where password='"+password+"'  and ";
	
    if(new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(name)) // email
    {
	  query += " email='" + name + "'"; 
    }	
    else if(!isNaN(name) && name.length >= 10) // phone
    {
	 query += " phone=" + name;
    }
    else
    {
	 query += " name='" + name + "'";
    }
    handleRequest(query,res,executeLoginQuery);
});


var handleRequest = function(query,res,callback)
{
   fs.readFile('configurations.txt', 'utf8', function(err, contents) {
   
      if(err)
	    res.end(JSON.stringify({ error : "Database configuration not found."}));
      if(contents)
      {
        var db_config = JSON.parse(contents).db_config;
	    callback(db_config,query,res);
	  }
      });
}


var executeLoginQuery = function(db_config,query,res)
{
  var con = mysql.createConnection(db_config);
    con.connect(function(err) 
	{
        if (err) 
		  res.end(JSON.stringify(err));
	    con.query(query, function (err, result) 
	    {
	       if (err) 
		 res.end(JSON.stringify({ error : "Cannot connect to server" }));
	       else if(result.length > 0)
	       {
	         sendLoginWithToken(res,result);
	       }
	       else
               {
	         res.end(JSON.stringify({ error : "Incorrect login credentials." }));
	       }
	    });
	});	

}


var sendLoginWithToken = function(res,result)
{
  var loginObj = result[0];
  var id = generateSecureId(new Date().getTime() + loginObj.email);
  loginObj["accessToken"] = id.slice(0,100);
  res.end(JSON.stringify(loginObj));
}

var executeQuery = function(db_config,query,res)
{
    var con = mysql.createConnection(db_config);
    con.connect(function(err) 
	{
        if (err) 
		  res.end(JSON.stringify(err));
	    con.query(query, function (err, result) 
	    {
		   if (err) 
		      res.end(JSON.stringify(err));
	       else
	       {
	          res.end(JSON.stringify(result));
	       }
	    });
	});	
}

var generateSecureId = function(phrase) {
    var length = parseInt(Math.random(4)*10);
    var salt = crypto.randomBytes(Math.ceil(length/2)).toString('hex').slice(0,length);  
    var hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
    hash.update(phrase);
    return hash.digest('hex').slice(0,parseInt(Math.random(4)*100));
}

var server = app.listen(8003, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("mTest server started on ", host, port)
})
