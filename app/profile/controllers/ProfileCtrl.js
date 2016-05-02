(function(){
  'use strict';

angular.module('app.profile')
  .controller('ProfileCtrl', function ($scope,data) {

  $scope.current_user = data.data;

});

})();
