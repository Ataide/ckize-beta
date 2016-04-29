"use strict";


angular.module('app.layout', ['ui.router'])

.config(function ($stateProvider, $urlRouterProvider) {


    $stateProvider
        .state('app', {
            abstract: true,
            views: {
                root: {
                    templateUrl: 'app/layout/layout.tpl.html',
                    controller: 'AppCtrl as app'
                }
            }
        });
    $urlRouterProvider.otherwise('/feeds');

})
