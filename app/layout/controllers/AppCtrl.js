(function() {
    'use strict'

    angular.module('app.layout')
        .controller('AppCtrl', AppCtrl);
    AppCtrl.$inject = ['User', 'socket', '$scope', '$timeout'];

    function AppCtrl(User, socket, $scope,$timeout) {


        var vm = this;
        vm.qtd = 7;


        User.initialized.then(function(user) {
          $scope.$on('$destroy', function() {

              socket.removeListeners();
          })

          socket.emit('register', {
              userId: User.id
          });

          socket.on(User.id, function(data) {
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
