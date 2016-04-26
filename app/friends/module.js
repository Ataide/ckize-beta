"use strict";


angular.module('app.friends', ['ui.router'])
.config(function ($stateProvider) {

    $stateProvider
        .state('app.friends', {
            url: '/friends',
            data: {
                title: 'Amigos'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/friends/views/friends.html',
                    controller: 'FriendsCtrl'
                }
            },
            resolve:{
              friends: function(FriendsServices){
                return FriendsServices.getFriends();
              }
            }
        })
        .state('app.friend-request', {
          url:'/friend-request',
          data: {
            title: 'Pedidos de Amizades'
          },
          views: {
            "content@app": {
              templateUrl: 'app/friends/views/friend-request.html',
              controller: 'FriendRequestsCtrl'
            }
          },
          resolve:{
            friendRequests: function(FriendsServices){
              return FriendsServices.getFriendRequests();
            }
          }
        })
        .state('app.peoples', {
            url: '/peoples',
            data: {
                title: 'Todos'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/friends/views/findFriends.html',
                    controller: 'FindFriendsCtrl'
                }
            },
            resolve:{
              peoples: function(FriendsServices){
                return FriendsServices.getAllUsers();
              }
            }
        })

});
