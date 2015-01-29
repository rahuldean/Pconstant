var mongoose                = require('mongoose');

var signUpSchema            = mongoose.Schema({
    email : String
});

module.exports = mongoose.model('SignUp', signUpSchema);