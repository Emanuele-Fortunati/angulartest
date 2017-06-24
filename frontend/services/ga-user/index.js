'use strict';

require('angular');

var gaUserService = require('./service');

module.exports = angular.module('gaUser', [])
    .factory('gaUserService', gaUserService);