(function() {
    'use strict'

    angular.module('app.layout')
        .controller('AppCtrl', AppCtrl);
    AppCtrl.$inject = ['User', '$socket', '$scope', '$timeout', '$rootScope'];

    function AppCtrl(User, $socket, $scope, $timeout, $rootScope) {
        var vm = this;
        vm.qtd = 0;

        User.initialized.then(function(user) {
            $socket.emit('register', {
                userId: User.id
            });

            $socket.on(User.id, $scope, function(data) {
                console.log(data);
                switch (data.clientcode) {
                    case 41:
                        $rootScope.$emit('newFriendPost', []);
                        sendAlert(data.message);
                        vm.qtd++;
                        break;
                    case 22:
                        sendAlert(data.message);
                        vm.qtd++;
                        break;
                }

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
