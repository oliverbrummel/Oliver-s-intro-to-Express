var express = require('express');
var path = require('path');

var app = express();

//reaches into newly made 'public' folder but need to understand more
app.use(express.static('public'));

app.get('/', function(req, res){
  console.log('responding to get request..');
  res.sendFile(path.join(__dirname, './index.html'));
})




app.listen(3000, function(){
  console.log('now listening for requests on port 3000');
});
