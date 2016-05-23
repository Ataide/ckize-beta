(function() {
    'use strict';

    angular.module('app.friends')
        .controller('FriendRequestsCtrl', function($scope, $rootScope,$state, FriendsServices, friendRequests) {


            $scope.haveFriendsRequest = friendRequests.data.length == 0 ? false : true;
            $scope.friendRequests = friendRequests;

            $scope.reject = function(userId) {
                FriendsServices.rejectFriendRequest(userId).then(function(response) {
                    $state.go('app.friend-request', {}, {
                        reload: true
                    });
                });
            }
            $scope.accept = function(user) {
                FriendsServices.acceptFriendRequest(user.id).then(function(response) {
                    $.smallBox({
                        title: user.profile.display_name + " agora é seu amigo.",
                        content: "Faça mais amizades.",
                        color: "#296191",
                        iconSmall: "fa fa-thumbs-up bounce animated",
                        timeout: 4000
                    });
                    $state.go('app.friend-request', {}, {
                        reload: true
                    });
                });
            }

            var friendRequestListener = $rootScope.$on('newFriendRequest', function(data) {
                $state.go('app.friend-request', {}, {
                    reload: true
                });
            });
            //destroy listener's on destroy a controller.
            $scope.$on('$destroy', function() {
                friendRequestListener();
            });


        });

})();
