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
            content : "Seja Bem-Vindo, comece agora mesmo...",
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
        $.SmartMessageBox({
            title : '<span class="MsgTitle"><i class="fa fa-envelope-o txt-color-orangeDark"></i> Redefinição de senha realizado com sucesso.</span>',
            content : response.data.success,
            buttons : '[OK]'
        }, function(ButtonPressed) {
            if (ButtonPressed == "OK") {
              $state.go('login');
            }
        });
      }).catch(function(error){

      });


    }

    $scope.resetPassLink = function(newpass){
      var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6XC9cL2xvY2FsaG9zdCIsImlhdCI6MTQ2Mzk4NTExOCwiZXhwIjoxNDY1MTk0NzE4LCJuYmYiOjE0NjM5ODUxMTgsImp0aSI6IjZjZmFlYmZhMTRmNDBiYzIyNTAxOTlmMDMwZWU2Yzg1In0.2MNbrNIMdOodAPVE03OKRm1mKbDDbOKUVot1fVIvw80';

      $http.post(APP_CONFIG.apiUrl+'/user-pass?token='+token+'&password='+newpass).then(function(response){
        $.SmartMessageBox({
            title : '<span class="MsgTitle"><i class="fa fa-envelope-o txt-color-orangeDark"></i> Redefinição de senha realizado com sucesso.</span>',
            content : response.data.success,
            buttons : '[OK]'
        }, function(ButtonPressed) {
            if (ButtonPressed == "OK") {
              $state.go('login');
            }
        });

      }).catch(function(error){

      });

    }

});
