"use strict";


angular.module('app.profile', ['ui.router'])
.config(function ($stateProvider) {

    $stateProvider
        .state('app.profile', {
            url: '/profile',
            data: {
                title: 'Profile'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/profile/views/profile.html',
                    controller: 'ProfileCtrl'
                }
            }
        })
});
