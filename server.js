var express = require('express');
var connections = [];
var title ='Untitle Presentation';//title


var port = process.env.PORT || 3000;
var app= express();
app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));

var server = app.listen(port);
var io = require('socket.io').listen(server);
//socket connections
io.sockets.on('connection',function(socket){
  //disconnect
  socket.once('disconnect',function(){
    connections.splice(connections.indexOf(socket),1);
    socket.disconnect();
    console.log('Disconnected %s socket remaining '+connections.length);


  });




  //connect
  socket.emit('Welcome',{
    title:title
  });
  connections.push(socket);

  console.log('Connected: '+ socket.id);
});


console.log('Running on port '+port);
