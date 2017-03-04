var express = require('express');



var port = process.env.PORT || 3000;
var app= express();
app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));

var server = app.listen(port);
var io = require('socket.io').listen(server);

io.sockets.on('connection',function(socket){
  console.log('Connected: '+ socket.id);
});


console.log('Running on port '+port);
