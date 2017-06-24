'use strict';

require('angular');
require('angular-ui-router');
require('../ga-countries');
require('../../services/ga-user')

var userdataForm = require('./component');

module.exports = angular.module('gaUserdata', ['ui.router', 'gaCountries', 'gaUser'])
    .component('gaUserdataForm', userdataForm);