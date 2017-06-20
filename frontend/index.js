'use strict';

var angular = require('angular');
require('angular-material');
require('angular-messages');

var app = angular.module('GovApp', ['ngMaterial', 'ngMessages']);

app.controller('AppCtrl', function($scope, $http) {

    // Init
    $scope.applied = false;
    $scope.formSent = false;
    $scope.serverError = false;
    $scope.countryError = false;

    // load data fro Countries
    $http({
        method: 'GET',
        url: 'https://restcountries.eu/rest/v1/region/Europe'
    }).then(function successCallback(response) {
        // in case of data with no integrity
        if(response.data.length == 0 || !response.data[0].name || !response.data[0].alpha2Code) {
            $scope.countryError = true;
        } else {
            $scope.countries = response.data;
        }
    }, function errorCallback(response) {
        $scope.countryError = true;
    });

    // Save user data
    $scope.submit = function() {

        $scope.formSent = true;
        $scope.serverError = false;

        if($scope.userForm.$valid) {

            $http({
                method: 'POST',
                url: 'http://localhost:8080/',
                data: {
                    name: $scope.userForm.name.$modelValue,
                    sex: $scope.userForm.sex.$modelValue,
                    country: $scope.userForm.country.$modelValue,
                    age: $scope.userForm.age.$modelValue
                }
            }).then(function successCallback(response) {
                $scope.applied = true;
            }, function errorCallback(response) {
                $scope.formSent = false;
                $scope.serverError = true;
            });


        }
    }

});