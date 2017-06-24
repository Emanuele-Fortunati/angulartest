'use strict';

var userService = function($http) {

    return {
        post: function(data) {

            return $http({
                method: 'POST',
                url: 'http://localhost:8080/',
                data: {
                    name: data.name,
                    sex: data.sex,
                    age: data.age,
                    country: data.country
                }
            });
        }
    }

}

userService.$injects = ['$http'];

module.exports = userService;