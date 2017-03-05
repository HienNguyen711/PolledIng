var express = require('express');
var _ =require('lodash');
var connections = [];
var title ='Untitle Presentation';//title
var audience =[];
var speaker = {};
var questions = require();



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

    var member= _.findWhere(audience,{id:this.id});
    //if found
    if(member){
      //remove member
      //broadcast

      console.log();
    }
    else if(this.id === speaker.id){

      console.log('');
      speaker ={};
      title='';
      io.sockets.emit('end',{title:'',speaker:''});

    }







    connections.splice(connections.indexOf(socket),1);
    socket.disconnect();
    console.log('Disconnected %s socket remaining '+connections.length);


  });


  socket.on('join',function(payload){
    var newMember = {
      id:this.id,
      name:payload.name
    };
    this.emit('joined',newMember);
    audience.push(newMember);
      //broadcast
    io.sockets.emit('audience',audience);
    console.log('Audience join '+ payload.name);

  });
  socket.on('start',function(payload){
    //payload

    speaker.id= this.is;

    //broadcast
    io.sockets.emit('start',{
      title:title,
      speaker:speaker.name
    })

  });




  //connect
  socket.emit('Welcome',{
    title:title,
    audience:audience,
    speaker:speaker.name,
    questions:questions
  });
  connections.push(socket);

  console.log('Connected: '+ socket.id);
});


console.log('Running on port '+port);
