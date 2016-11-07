var express = require('express'),
	app     = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

var fs = require("fs");
var contents;

app.post("/getpractices", function(req, resp){
	
	var reqBody = req.body,
		reqBodyStr = JSON.stringify(reqBody);

	console.log("getpractices method started: "+reqBodyStr);
	
	var category = reqBody.category;
	if (category == null)
		resp.json("No Category");
	else if(category==='Web Application'){
		
		contents = fs.readFileSync("public/JSON/WebApplication.json").toString();
		var contentsJSON = JSON.parse(contents);
		resp.json(contentsJSON);
	}
	else if(category==='MicroService API Management'){
		
		contents = fs.readFileSync("public/JSON/MicroServicesAPIManagement.json").toString();
		var contentsJSON = JSON.parse(contents);
		resp.json(contentsJSON);
	}
	else if(category==='Android Applications'){
	
	contents = fs.readFileSync("public/JSON/AndroidApplications.json").toString();
	var contentsJSON = JSON.parse(contents);
	resp.json(contentsJSON);
	}
	else if(category==='Middleware Applications'){
	
	contents = fs.readFileSync("public/JSON/MiddlewareApplications.json").toString();
	var contentsJSON = JSON.parse(contents);
	resp.json(contentsJSON);
	}
	else if(category==='BPM'){
	
	contents = fs.readFileSync("public/JSON/BPM.json").toString();
	var contentsJSON = JSON.parse(contents);
	resp.json(contentsJSON);
	}
	else if(category==='WCS'){
	
	contents = fs.readFileSync("public/JSON/WCS.json").toString();
	var contentsJSON = JSON.parse(contents);
	resp.json(contentsJSON);
	}
});

app.listen(3000,'localhost');
console.log('Server started at port: 3000');
//logger.info('Server started at port: '+ibmconfig.getPort());
