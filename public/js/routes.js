angular.module('routes', [])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'views/launch.html',
                controller: 'LaunchController'
            });
        $locationProvider.html5Mode(true);
        
    }]);