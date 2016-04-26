(function(){
  'use strict';

  angular.module('app.friends')
    .factory('FriendsServices', function($http, APP_CONFIG){
        return{
          getFriendRequests: getFriendRequests,
          acceptFriendRequest: acceptFriendRequest,
          rejectFriendRequest: rejectFriendRequest,
          sendFriendRequest: sendFriendRequest,
          getFriends: getFriends,
          removeFriend: removeFriend,
          getAllUsers: getAllUsers,
        };

        function getAllUsers(){
          return $http.get(APP_CONFIG.apiUrl+'/users');
        }

        function removeFriend(id){
          return $http.delete(APP_CONFIG.apiUrl+'/friends/'+id);
        }

        function getFriends(){
          return $http.get(APP_CONFIG.apiUrl+'/friends');
        }

        function sendFriendRequest(userId){
          return $http.post(APP_CONFIG.apiUrl+'/friend-requests',{'userId': userId});
        }

        function rejectFriendRequest(userId){
          return $http.delete(APP_CONFIG.apiUrl+'/friend-requests/'+userId);
        }

        function acceptFriendRequest(userId){
          return $http.post(APP_CONFIG.apiUrl+'/friends', {'userId' : userId});
        }

        function getFriendRequests(){
          return $http.get(APP_CONFIG.apiUrl+'/friend-requests');
        }

    });

})();
