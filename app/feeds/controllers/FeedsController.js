'use strict';

angular.module('app.feeds').controller('FeedsController', function ($scope,$http,User,APP_CONFIG, FeedsService) {
  $scope.post = {};

  function getFeeds() {
      FeedsService.getFeeds().then(function(response) {
        $scope.feeds = response.data;
        console.log(response.data);
      });
  }

  getFeeds();

  $scope.publish = function() {
    $scope.post.poster_firstname = User.username;
    FeedsService.publish($scope.post).then(function(response) {
      delete $scope.post;
      getFeeds();
    });


  }


});
