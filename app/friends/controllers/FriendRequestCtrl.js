(function(){
  'use strict';

  angular.module('app.friends')
    .controller('FriendRequestsCtrl', function($scope,$state, FriendsServices, friendRequests){

      console.log(friendRequests);

      $scope.friendRequests = friendRequests;

      $scope.reject = function(userId){
        FriendsServices.rejectFriendRequest(userId).then(function(response) {
          $state.go('app.friend-request',{},{reload:true});
        });
      }

      $scope.accept = function(user){
        FriendsServices.acceptFriendRequest(user.id).then(function(response) {
          $.smallBox({
              title: user.profile.display_name+" agora é seu amigo.",
              content: "Faça mais amizades.",
              color: "#296191",
              iconSmall: "fa fa-thumbs-up bounce animated",
              timeout: 4000
          });
          $state.go('app.friend-request',{},{reload:true});
        });
      }

    });

})();
