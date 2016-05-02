(function(){
  'use strict';

  angular.module('app.profile')
    .controller('ProfileUpdateCtrl', function($scope,$state,data,$http,APP_CONFIG) {
      $scope.user_update = data.data.profile;
      console.log($scope.user_update);

      $scope.voltar = function(){
        $state.go('app.profile',{},{reload:true});
      }

      $scope.salvar = function(){
        $http.put(APP_CONFIG.apiUrl + '/user/profile', $scope.user_update).then(function(response){
          console.log(response);
          $scope.voltar();
        });
      };


    });

})();
