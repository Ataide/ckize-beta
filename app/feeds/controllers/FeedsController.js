'use strict';

angular.module('app.feeds').controller('FeedsController', function($scope, $http, User, APP_CONFIG, FeedsService, $rootScope) {
    $scope.post = {};
    getFeeds();


    $scope.publish = function() {
      $scope.post.poster_firstname = User.username;
      FeedsService.publish($scope.post).then(function(response) {
        delete $scope.post;
        getFeeds();
      });
    }

    function getFeeds() {
        FeedsService.getFeeds().then(function(response) {
            $scope.feeds = response.data;
        });
    }



    var postListener = $rootScope.$on('newFriendPost', function(data) {
      FeedsService.getFeeds().then(function(response) {
          console.log(response);
          $scope.feeds = response.data;
      });
    });

    //destroy listener's on destroy a controller.
    $scope.$on('$destroy', function() {
      postListener();
    });
});
