angular.module('LaunchCtrl', [])
    .controller('LaunchController', ['$scope', 'Launch',function($scope, Launch){
        $('#bestPartPopover').popover();
        var lang = $('.lang, .first');
        var langIndex = -1;

        function showNextLang() {
            ++langIndex;
            lang.eq(langIndex % lang.length)
                .fadeIn(1500)
                .delay(2000)
                .fadeOut(1500, showNextLang);
        }

        showNextLang();

        $scope.heading = "Point Messaging";
        $scope.showAlert = false;
        $scope.isError = false;
        $scope.alertMessage = "";
        $scope.launchSignUpSubmit = function(){

            // 1. Validate the email address
            if(emailValidate($scope.emailAddress)){
                // valid

                //clear any error classes
                $scope.formValidationClass = "";

                // 2. send
                Launch.signUp($scope.emailAddress, function(response){
                    console.log(JSON.stringify(response));
                    if(typeof response.isError !== 'undefined' && !response.isError){
                        // success
                        $scope.showAlert = true;
                        $scope.alertMessage = response.message;
                    } else {
                        $scope.showAlert = true;
                        $scope.isError = true;
                        $scope.alertMessage = response.message || "That's embarrassing we will check that out. you should try again later";
                    }
                });

            } else {
                // not valid show error
                $scope.formValidationClass = "has-error"
            }
        };

        var emailValidate = function(email){
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    }]);