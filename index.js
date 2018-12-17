// Module requires
var express = require('express');
var routes = require('./routes');
// Instatiate application instance
var app = express();


app.get('/', routes.index);
app.get('/api/users/:id?', routes.users);
app.get('*', routes.default);



// Initialize the server
var server = app.listen(5803, function() {
    console.log('Listening on port 5803');
});