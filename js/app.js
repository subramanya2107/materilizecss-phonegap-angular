'use strict';

var app=angular.module('myApp', [
    'ngTouch',
    'ngRoute',
    'ngAnimate'
]).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'});
    $routeProvider.when('/receive', {templateUrl: 'partials/receive-form.html', controller: 'HomeCtrl'});
    $routeProvider.otherwise({redirectTo: '/home'});
}]);
