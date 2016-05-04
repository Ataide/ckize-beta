(function() {
    'use strict'

    angular.module('app.layout')
        .controller('AppCtrl', AppCtrl);
    AppCtrl.$inject = ['User', '$socket', '$scope', '$timeout', '$rootScope'];

    function AppCtrl(User, $socket, $scope, $timeout, $rootScope) {
        var vm = this;
        vm.qtd = 0;
        vm.love = function(){
          love();
        };

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

        var clean = function(h) {
            h.parentNode.removeChild(h);
        };

        var love = function() {
            var h = document.createElement('span');
            h.className = 'heart';
            document.body.appendChild(h);
            setTimeout(function() {
                clean(h);
            }, 3000);
        };
    }
})()
