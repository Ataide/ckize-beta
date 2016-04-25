

'use strict';

angular.module('app.auth').factory('User', function ($http, $q, APP_CONFIG) {
    var dfd = $q.defer();

    var UserModel = {
        initialized: dfd.promise,
        username: undefined,
        picture: undefined,
        update: update,
    };

    function update(){
      $http.get(APP_CONFIG.apiUrl + '/user/profile').then(function(response){
        UserModel.username = response.data.display_name;
        UserModel.picture = response.data.profile_picture_url;
        dfd.resolve(UserModel)
      });
    }

    return UserModel;
});
