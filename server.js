var express = require('express');





var port = process.env.PORT || 3000;
var app= express();
app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));

app.listen(port,function(){
  console.log('Running on port '+port);
})
