var express = require('express');

var app = express();
var port = process.env.port || 3030;

app.use( '/',  express.static(__dirname) );

// Routes - catch-all to return index.html
app.get('*', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, function() {
  console.log('app listenting on port: ' + port);
});