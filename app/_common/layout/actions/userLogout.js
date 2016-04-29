"use strict";

angular.module('SmartAdmin.Layout').directive('userLogout', function($state,User,$auth){

    return {
        restrict: 'A',
        link: function(scope, element){
            element.on('click', function(){
                $.SmartMessageBox({
                    title : '<span class="MsgTitle"><i class="fa fa-sign-out txt-color-orangeDark"></i> Logout <span class="txt-color-orangeDark"><strong>'+User.username+'</strong></span>?</span>',
                    content : "Deseja realmente sair?",
                    buttons : '[Não][Sim]'
                }, function(ButtonPressed) {
                    if (ButtonPressed == "Sim") {
                       window.location.hash = "login";
                       $auth.logout();
                      

                    }
                });

            });
        }
    }

});
