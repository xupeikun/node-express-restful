var express = require('express');
var mysql = require('mysql');
var app = express();
var bodyParser = require('body-parser');
const IP = process.env.IP
const PORT = process.env.PORT

app.use( bodyParser.urlencoded({extended: true}) );
app.use( '/public', express.static( __dirname + '/public') );
app.use('/api/user', require('./api/user'));

app.listen(PORT,IP,(err, result) =>{
	if(err) {
		console.log("error")
	} else {
        console.log(`Listening at ${IP}:${PORT}`)
	}
});





