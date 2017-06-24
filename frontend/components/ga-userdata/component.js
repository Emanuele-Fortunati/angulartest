'use strict';


var UserdataFormController = function($scope, $element, $attrs, $state, gaUserService) {
    var ctrl = this;

    // init
    ctrl.name = '';
    ctrl.age = '';
    ctrl.sex = 'male';
    ctrl.country = '';

    ctrl.formSent = false;

    // Save user data
    ctrl.submit = function(userForm) {

        ctrl.formSent = true;
        ctrl.serverError = false;

        if(userForm.$valid) {

            gaUserService.post({

                name: ctrl.name,
                sex: ctrl.sex,
                age: ctrl.age,
                country: ctrl.country

            }).then(function successCallback(response) {

                $state.go('userdataComplete', { name: ctrl.name });

            }, function errorCallback(response) {

                ctrl.formSent = false;
                ctrl.serverError = true;

            });




        }
    }

}

UserdataFormController.$injects = ['$scope', '$element', '$attrs', '$state', 'gaUserService'];

var userdataForm = {
    templateUrl: './ga-userdata/component.html',
    controller: UserdataFormController
};

module.exports = userdataForm;