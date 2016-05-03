(function(){
  'use strict';

angular.module('app.profile', ['ui.router','ngMask'])
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
            },
            resolve: {
              data: function($http,APP_CONFIG){
                return $http.get(APP_CONFIG.apiUrl+'/profile');
              }
            }
        })
        .state('app.profile.details', {
          url:'/details/{userId}',
          data: {
            title: 'Profile'
          },
          views: {
            "content@app": {
              templateUrl: 'app/profile/views/profile-details.html',
              controller: 'ProfileDetailsCtrl'
            }
          },
          resolve: {
            data: function($http, APP_CONFIG,$stateParams) {
              return $http.get(APP_CONFIG.apiUrl+'/profile/'+$stateParams.userId);
            }
          }
        })
        .state('app.profile.update',{
          url:'/update',
          data: {
            title: 'Update Profile'
          },
          views:{
            "content@app": {
              templateUrl: 'app/profile/views/profile-update.html',
              controller: 'ProfileUpdateCtrl'
            }
          },
          resolve: {
            data: function($http,APP_CONFIG){
              return $http.get(APP_CONFIG.apiUrl+'/user/profile');
            }
          }
        })
});

})();
