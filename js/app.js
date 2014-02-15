'use strict';

var app = angular.module('bespoken', [
    'ngRoute',
    'ngResource',
    'bespoken.filters',
    'bespoken.services',
    'bespoken.directives',
    'bespoken.controllers'
]);

app.config(['$routeProvider', function($rp) {
    $rp.when('/speech', {templateUrl: '/partials/speech.html',
    controller: 'bespokenSpeech'});
    $rp.otherwise({redirectTo: '/speech'});
});
