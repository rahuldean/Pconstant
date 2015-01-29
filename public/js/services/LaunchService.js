angular.module('LaunchService', [])
    .factory('Launch', ['$http', function($http){
    return {
        signUp : function(email, callback){
            $http.get('/api/launch/signUp?email=' + email)
                .success(function(data, status, headers, config) {
                    callback(data);
                }).
                error(function(data, status, headers, config) {
                    callback({
                        message: data.message || 'Ouch! Please report that',
                        isError: true
                    });
                });
        }
    }
}]);