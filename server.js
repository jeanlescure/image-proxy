var request = require('request');
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  // i.e. http://proxy.address.com/?i=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F3330339%3Fv%3D3%26s%3D96
  request(req.param('i')).pipe(res);
});

app.listen(process.env.PORT || 8080);