(function(){
  'use strict';

angular.module('app.profile')
  .controller('ProfileCtrl', function ($scope,data,$state,APP_CONFIG,$http) {

  $scope.current_user = data.data;

  $scope.deletePost = function(id) {
          $.SmartMessageBox({
              title: '',
              content: "Deseja realmente apagar esse Post?",
              buttons: '[Não][Sim]'
          }, function(ButtonPressed) {
              if (ButtonPressed == "Sim") {

                $http.delete(APP_CONFIG.apiUrl + '/posts/' + id).then(function(response) {
                  $state.reload();
                });

              }

      });

  }

});

})();
