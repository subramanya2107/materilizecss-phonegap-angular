'use strict';

angular.module('myApp', [
    'ngTouch',
    'ngRoute',
    'ngAnimate',
    'myApp.controllers',
    'myApp.memoryServices',
    'myApp.cordovaServices'
]).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'});
    $routeProvider.when('/receive', {templateUrl: 'partials/receive-form.html', controller: 'HomeCtrl'});
    $routeProvider.otherwise({redirectTo: '/home'});
}]).factory('deviceReady', function(){
  return function(done) {
    if (typeof window.cordova === 'object') {
      document.addEventListener('deviceready', function () {
        done();
      }, false);
    } else {
      done();
    }
  };
}).directive('buttonCollapse', function() {
    return {
        // Restrict it to be an attribute in this case
        restrict: 'C',
        // responsible for registering DOM listeners as well as updating the DOM
        link: function(scope, element, attrs) {
            $(element).sideNav();
        }
    };
}).directive('modalTrigger', function() {
    return {
        // Restrict it to be an attribute in this case
        restrict: 'C',
        // responsible for registering DOM listeners as well as updating the DOM
        link: function(scope, element, attrs) {
            $(element).leanModal();
        }
    };
});

