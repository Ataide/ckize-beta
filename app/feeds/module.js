"use strict";


angular.module('app.feeds', ['ui.router'])
.config(function ($stateProvider) {

    $stateProvider
        .state('app.feeds', {
            url: '/feeds',
            data: {
                title: 'Feeds'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/feeds/views/feeds.html',
                    controller: 'FeedsController'
                }
            },
            resolve: {
              user: function(User){
                return User;
              }
            }
        })
});
