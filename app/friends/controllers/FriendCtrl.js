'use strict';

angular.module('app.friends').controller('FriendsCtrl', function ($scope,$state,friends,FriendsServices) {

  $scope.friends = friends.data;

  $scope.removeFriend = function(id){
    FriendsServices.removeFriend(id).then(function(response){
        $state.go('app.friends',{},{reload:true});
    });
  }

  console.log(friends.data);


});
