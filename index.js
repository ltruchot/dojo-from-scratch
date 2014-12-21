var express = require('express');
var app = express();

var dir = {
	client: __dirname + "/client"
}; 

app.use('/client', express.static(dir.client));
app.get('/', function(req, res){
  res.sendFile("index.html", {root: dir.client});
});

app.listen(3000);