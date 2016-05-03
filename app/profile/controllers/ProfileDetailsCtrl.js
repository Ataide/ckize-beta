(function(){
  'use strict';

  angular.module('app.profile')
    .controller('ProfileDetailsCtrl', function($scope,data) {

      $scope.current_user = data.data;
      
    });
})();
