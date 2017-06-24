'use strict';

var config = function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when("", "/");

    var userdataState = {
        name: 'userdata',
        url: '/',
        templateUrl: './views/userdata.html'
    }

    var userdataCompleteState = {
        name: 'userdataComplete',
        url: '/applicaiton-complete',
        templateUrl: 'views/userdata-complete.html',
        params: {
            name: null
        },
        controller: function($scope, $stateParams) {
            $scope.name = $stateParams.name;
        }
    }

    $stateProvider.state(userdataState);
    $stateProvider.state(userdataCompleteState);
};

config.$injects = ['$stateProvider'];

module.exports = config;