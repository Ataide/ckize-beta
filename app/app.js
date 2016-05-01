'use strict';

/**
 * @ngdoc overview
 * @name app [smartadminApp]
 * @description
 * # app [smartadminApp]
 *
 * Main module of the application.
 */

angular.module('app', [
    'ngSanitize',
    'ngAnimate',
    'restangular',
    'ui.router',
    'ui.bootstrap',
    'angularMoment',
    // Smartadmin Angular Common Module
    'SmartAdmin',
    // App
    'app.auth',
    'app.layout',
    'app.feeds',
    'app.friends',
    //'app.chat',
    //'app.dashboard',
    'app.appViews',
    // 'app.misc',
    'app.profile'


])

.config(function($provide, $httpProvider, RestangularProvider) {

        // Intercept http calls.
        $provide.factory('myInterceptors', function($q, $injector) {
            var errorCounter = 0;

            function notifyError(rejection) {
                console.log(rejection);
                if (rejection.status == 401) {
                    $.bigBox({
                        title: "OPS! Não Autorizado.",
                        content: rejection.data.error,
                        color: "#C46A69",
                        icon: "fa fa-warning shake animated",
                        number: ++errorCounter,
                        timeout: 6000
                    });
                } else {
                    $.bigBox({
                        title: rejection.status + ' ' + rejection.statusText,
                        content: rejection.data,
                        color: "#C46A69",
                        icon: "fa fa-warning shake animated",
                        number: ++errorCounter,
                        timeout: 6000
                    });
                }
            }

            return {
                request: function(config) {
                    config.headers = config.headers || {};
                    if (sessionStorage.getItem('satellizer_token')) {
                        config.headers.Authorization = 'Bearer ' + sessionStorage.getItem('satellizer_token');
                    }
                    return config;
                },
                // On request failure
                requestError: function(rejection) {
                    // show notification
                    notifyError(rejection);

                    // Return the promise rejection.
                    return $q.reject(rejection);
                },

                // On response failure
                responseError: function(rejection) {
                    var $state = $state || $injector.get('$state');
                    // show notification
                    notifyError(rejection);

                    if (rejection.status == 400) {
                        $state.go('login', {});
                    }
                    // Return the promise rejection.
                    return $q.reject(rejection);
                }
            };
        });

        // Add the interceptor to the $httpProvider.
        $httpProvider.interceptors.push('myInterceptors');

        RestangularProvider.setBaseUrl(location.pathname.replace(/[^\/]+?$/, ''));

    })
    .constant('APP_CONFIG', window.appConfig)

.run(function($rootScope, $state, $stateParams, User, $auth,amMoment) {
   amMoment.changeLocale('pt-br');

        if ($auth.isAuthenticated()) {
            User.update();
            $state.go('app.feeds',{});
        }
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        // editableOptions.theme = 'bs3';

    })
    .service('socket', function($timeout) {
        this.socket = io.connect('http://localhost:7000');

        this.on = function(eventName, callback) {
            if (this.socket) {
                this.socket.on(eventName, function(data) {
                    $timeout(function() {
                        callback(data);
                    });
                });
            }
        };

        this.emit = function(eventName, data) {
            if (this.socket) {
                this.socket.emit(eventName, data);
            }
        };

        this.removeListeners = function() {
            if (this.socket) {
                this.socket.removeAllListeners();
            }
        };

    });
