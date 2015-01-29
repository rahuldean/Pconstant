'use strict';

var express                 = require('express'),
    app                     = express(),
    routes                  = require('./app/routes'),
    mongoose                = require('mongoose');


// Set static files location
app.use(express.static(__dirname + '/public'));
var env                     = require('./config/env'),
    dbOptions               = {
        socketOptions: {
            keepAlive: 1,
            connectTimeoutMS: 30000
        }
    };

mongoose.connect(env.db, dbOptions);

mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

mongoose.connection.once('open', function() {
    console.log('Connected to database ' + env.db);
    var server  = app.listen(env.port|| 8000, env.ip || '0.0.0.0', function(){
        console.log('Listening on %s at %s', server.address().port, server.address().address);
        // Register routes
        routes(app);
    });
});