'use strict';

require('angular');

var countrySelect = require('./component');

module.exports = angular.module('gaCountries', [])
    .component('gaCountrySelect', countrySelect);