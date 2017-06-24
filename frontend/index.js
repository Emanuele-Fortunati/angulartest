'use strict';

var angular = require('angular'),
    GovAppConfig = require('./config');

require('angular-material');
require('angular-messages');
require('angular-ui-router');

require('./components/ga-userdata');

var app = angular
    .module('GovApp', ['ngMaterial', 'ngMessages', 'ui.router', 'gaUserdata'])
    .config(GovAppConfig);