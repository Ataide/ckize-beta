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
              controller: 'FriendsCtrl'
            }
          }
        })

});
