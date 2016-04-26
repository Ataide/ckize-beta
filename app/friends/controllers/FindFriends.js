(function(){
  'use strict';

  angular.module('app.friends')
    .controller('FindFriendsCtrl', function($scope,peoples, FriendsServices){

      $scope.users = peoples.data;

      $scope.sendFriendRequest = function(user){
        FriendsServices.sendFriendRequest(user.id).then(function(response){
          $.smallBox({
              title: "Solicitação Enviado.",
              content: "Aguarde "+user.profile.display_name+" aceitar suas solicitação.",
              color: "#296191",
              iconSmall: "fa fa-thumbs-up bounce animated",
              timeout: 5000
          });
        });

      }

    });

})();
