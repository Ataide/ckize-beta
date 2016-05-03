"use strict";

angular.module('app.auth', ['ui.router','satellizer'])

  .config(function($stateProvider,$authProvider) {

    // $authProvider.loginUrl = 'http://localhost/api/api/authenticate';
    // $authProvider.signupUrl = 'http://localhost/api/api/register';

    $authProvider.loginUrl = 'http://54.94.213.49/api/api/authenticate';
    $authProvider.signupUrl = 'http://54.94.213.49/api/api/register';


    $stateProvider
    .state('login', {
        url: '/login',
        views: {
            root: {
                templateUrl: 'app/auth/views/login.html',
                controller: 'LoginCtrl'
            }
        },
        data: {
            title: 'Login',
            htmlId: 'extr-page'
        },
        resolve: {
            scripts: function(lazyScript){
                return lazyScript.register([
                    'build/vendor.ui.js'

                ])
            }
          }
    })

    .state('register', {
        url: '/register',
        views: {
            root: {
                templateUrl: 'app/auth/views/register.html',
                controller: 'LoginCtrl'
            }
        },
        data: {
            title: 'Registro',
            htmlId: 'extr-page'
        }
    })

    .state('forgotPassword', {
        url: '/forgot-password',
        views: {
            root: {
                templateUrl: 'app/auth/views/forgot-password.html'
            }
        },
        data: {
            title: 'Forgot Password',
            htmlId: 'extr-page'
        }
    })

    .state('lock', {
        url: '/lock',
        views: {
            root: {
                templateUrl: 'app/auth/views/lock.html'
            }
        },
        data: {
            title: 'Locked Screen',
            htmlId: 'lock-page'
        }
    })


}).constant('authKeys', {
    googleClientId: '',
    facebookAppId: ''
});
