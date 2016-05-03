(function() {
    'use strict'

    angular.module('app.layout')
        .controller('AppCtrl', AppCtrl);
    AppCtrl.$inject = ['User', '$socket', '$scope', '$timeout','$rootScope'];

    function AppCtrl(User, $socket, $scope, $timeout,$rootScope) {
        var vm = this;
        vm.qtd = 7;


        User.initialized.then(function(user) {
            $socket.emit('register', {
                userId: User.id
            });

            $socket.on(User.id, $scope, function(data) {
              $rootScope.$emit('event',[1,2,3]);
              sendAlert(data.message)
              console.log(data);
            });

        });







        function sendAlert(alert) {
            $.smallBox({
                title: "Notificação",
                content: alert,
                color: "#296191",
                iconSmall: "fa fa-user bounce animated",
                timeout: 5000
            });
        }


    }
})()
