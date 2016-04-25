(function(){
  'use strict';

  angular.module('app.feeds')
    .factory('FeedsService', function($http,APP_CONFIG){

      return {
        getFeeds: getFeeds,
        publish: publish,
      };

      function publish(post){
        return $http.post(APP_CONFIG.apiUrl+'/posts', post);
      }

      function getFeeds() {
        return $http.get(APP_CONFIG.apiUrl+'/posts');
      }

    });
})();
