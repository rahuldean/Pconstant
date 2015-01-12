'use strict';

var express               = require('express'),
    app                   = express(),
    routes                = require('./app/routes');


// Set static files location
app.use(express.static(__dirname + '/public'));

var server                = app.listen(process.env.PORT || 8000, process.env.IP || '0.0.0.0', function(){
    console.log('Listening on %s at %s', server.address().port, server.address().address);

    // Register routes
    routes(app);
    
});
