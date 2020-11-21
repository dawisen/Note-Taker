var express = require('express');
var path = require('path');
var app = express();

var PORT = process.env.PORT || 8080;
//these app.use handlers parse the note data
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
  extended: true
}));
//require these route files so that the server's get request returns
//and displays the html and api pages
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

app.listen(PORT, function () {
  //console.log to tell us the server is running
  console.log('App listening on PORT: ' + PORT);
});
