(function() {
    'use strict';

    angular.module('app.profile')
        .controller('ProfileUpdateCtrl', function($scope, $state, data, $http, APP_CONFIG, fileUpload) {
            $scope.user_update = data.data.profile;
            console.log($scope.user_update);

            $scope.voltar = function() {
                $state.go('app.profile', {}, {
                    reload: true
                });
            }

            $scope.salvar = function() {

              if($scope.loadedFile) {
                var file = $scope.myFile;
                var uploadUrl = APP_CONFIG.apiUrl + '/user/profile/update_picture';
                fileUpload.uploadFileToUrl(file, uploadUrl);
              }


              $http.put(APP_CONFIG.apiUrl + '/user/profile', $scope.user_update).then(function(response) {
                  console.log(response);
                  $scope.voltar();
              });
            };          

            $scope.fileLoaded = function(e) {
                var tgt = e.target || window.event.srcElement,
                    files = tgt.files,
                    fileReader;

                if (FileReader && files && files.length) {
                    var fileReader = new FileReader();
                    fileReader.onload = function() {

                        $scope.loadedFile = fileReader.result;
                        $scope.$apply();
                    }
                    fileReader.readAsDataURL(files[0]);
                } else {
                    // Not supported
                }
            };


        });

})();
