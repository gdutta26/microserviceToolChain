var express 	= require('express'),
	app     	= express();

var myError = require('./error.js');


app.get("/geterror", function (req, resp){

		var error = myError.seterror(100,"Business Error");

		resp.json(error);
	}
);

app.listen(3000,'localhost');
console.log('Server started at port: 3000');