var path                  = require('path');

module.exports            = function(app){
  /* API Routes */
  
  // Api to register a user visiting the launch page
  app.post('/api/launch/register', function(req, res){
    
    
  });
  
  app.get('*', function(req, res){
    res.sendFile('index.html', { root: path.join(__dirname, '../public')});
  });
};
