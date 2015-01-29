var SignUp              = require('../models/signUp');

exports.addUser         = function(email, callback){
    if(typeof email !== 'undefined' && email !== '' && emailValidate(email)){
        SignUp.update({ email: email },
            {
                $set: {email: email }
            },
            {
                upsert: true
            },
        function(err, numberEffected){
            if(err){
                callback({ message: "Oops! We missed it. We will look into it" }, null);
                console.log({
                    requestedBy: email,
                    error: err
                });
            } else {
                callback(null, numberEffected);
            }
        })

    } else {
        callback({ message: "That's an invalid email" }, null);
    }
};

var emailValidate = function(email){
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};