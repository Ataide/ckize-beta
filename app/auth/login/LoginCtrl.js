"use strict";

angular.module('app.auth').controller('LoginCtrl', function ($scope,User, $state,$auth,$http,APP_CONFIG) {

    $scope.login = function(credentials) {
      $auth.login(credentials).then(function(data) {
        User.update();
        $state.go('app.feeds',{},{reload:true});
      }).catch(function (response) {
        delete $scope.credentials;
      });
    }

    $scope.register = function(credentials) {
      $auth.signup(credentials).then(function(){
        $.SmartMessageBox({
            title : '<span class="MsgTitle"><i class="fa fa-sign-out txt-color-orangeDark"></i> Parabéns <span class="txt-color-orangeDark"><strong>'+credentials.displayName+'</strong></span>!</span>',
            content : "Seja Benvindo, comece agora mesmo...",
            buttons : '[Iniciar]'
        }, function(ButtonPressed) {
            if (ButtonPressed == "Iniciar") {
              $state.go('login');
            }
        });
      }).catch(function(error){

      });
    }

    $scope.forgotPass = function(email) {
      $http.post(APP_CONFIG.apiUrl+'/forgot-pass', {'email': email}).then(function(response){
        console.log(response);

      });

    }

});
