(function(){
  'use strict';

  angular.module('app.profile')
    .controller('ProfileDetailsCtrl', function($scope,data,$socket) {
      $scope.current_user = data.data;
      console.log(data.data);

      $scope.sendLove = function(){
        $socket.emit('broadcast', {
          'userId': $scope.current_user.profile.user_id,
    			'receiverId': $scope.current_user.profile.user_id,
    			'relatedToId': 1,
    			'clientcode': 99,
    			'message': 'is the love'
    		})

      }

    });
})();
