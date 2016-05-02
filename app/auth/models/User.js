

'use strict';

angular.module('app.auth').factory('User', function ($http, $q, APP_CONFIG) {
    var dfd = $q.defer();

    var UserModel = {
        initialized: dfd.promise,
        id: undefined,
        username: undefined,
        picture: undefined,
        update: update,
    };

    function update(){
      $http.get(APP_CONFIG.apiUrl + '/user/profile').then(function(response){
        UserModel.id = response.data.profile.user_id;
        UserModel.username = response.data.profile.display_name;
        UserModel.picture = response.data.profile.profile_picture_url;
        dfd.resolve(UserModel)
      });
    }

    return UserModel;
});
