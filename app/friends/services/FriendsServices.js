(function(){
  'use strict';

  angular.module('app.friends')
    .factory('FriendsServices', function($http, APP_CONFIG){
        return{
          getFriendRequests: getFriendRequests,
          acceptFriendRequest: acceptFriendRequest,
          rejectFriendRequest: rejectFriendRequest,
        };

        function rejectFriendRequest(userId){
          return $http.delete(APP_CONFIG.apiUrl+'/friend-requests/'+userId);
        }

        function acceptFriendRequest(userId){
          return $http.post(APP_CONFIG.apiUrl+'/friends', {userId : userId});
        }

        function getFriendRequests(){
          return $http.get(APP_CONFIG.apiUrl+'/friend-requests');
        }

    });

})();
