(function() {
    'use strict';

    angular.module('app.profile')
        .controller('ProfileDetailsCtrl', function($scope, data, $socket,$state, APP_CONFIG) {
            $scope.current_user = data.data;
            console.log(data.data);

            $scope.sendLove = function() {
                $socket.emit('broadcast', {
                    'userId': $scope.current_user.profile.user_id,
                    'receiverId': $scope.current_user.profile.user_id,
                    'relatedToId': 1,
                    'clientcode': 99,
                    'message': 'is the love'
                })

            }

            $scope.deletePost = function(id) {
                    $.SmartMessageBox({
                        title: '<span class="MsgTitle"><i class="fa fa-sign-out txt-color-orangeDark"></i> Logout <span class="txt-color-orangeDark"><strong>' + User.username + '</strong></span>?</span>',
                        content: "Deseja realmente apagar esse Post?",
                        buttons: '[Não][Sim]'
                    }, function(ButtonPressed) {
                        if (ButtonPressed == "Sim") {

                          $http.delete(APP_CONFIG.apiUrl + '/posts/' + id).then(function(response) {
                            window.location.hash = "profile";
                            $state.reload();
                          });

                        }
                    });


            }

        });
})();
