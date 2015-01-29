var path                  = require('path'),
    SignUpController                = require('./controllers/SignUpController');

module.exports            = function(app){
  /* API Routes */
  
  // Api to register a user visiting the launch page
  app.get('/api/launch/signUp', function(req, res){
    SignUpController.addUser(req.query.email, function(err, data){
      if(err){
        err.isError = true;
        res.send(err)
      } else {
        res.send({message: 'You are in, you are a step closer to sensible messaging. We will keep you updated', isError: false})
      }
    });
  });
  
  app.get('*', function(req, res){
    res.sendFile('index.html', { root: path.join(__dirname, '../public')});
  });
};
