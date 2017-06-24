'use strict';


var CountrySelectController = function($scope, $element, $attrs, $http) {
    var ctrl = this;

    // init
    ctrl.countryError = false;

    // load data fro Countries
    $http({
        method: 'GET',
        url: 'https://restcountries.eu/rest/v1/region/Europe'
    }).then(function successCallback(response) {
        // in case of data with no integrity
        if(response.data.length == 0 || !response.data[0].name || !response.data[0].alpha2Code) {
            ctrl.countryError = true;
        } else {
            ctrl.countries = response.data;
        }
    }, function errorCallback(response) {
        ctrl.countryError = true;
    });


}

CountrySelectController.$injects = ['$scope', '$element', '$attrs', '$http'];

var countrySelect = {
    templateUrl: './ga-countries/component.html',
    controller: CountrySelectController,
    bindings: {
        model: '=',
        name: '@',
        required: '@'
    }
};

module.exports = countrySelect;