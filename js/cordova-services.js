'use strict';

angular.module('myApp.cordovaServices', [])
   .factory('getCurrentPosition', function(deviceReady, $document, $window, $rootScope){
  return function(done) {
    deviceReady(function(){
      navigator.geolocation.getCurrentPosition(function(position){
        $rootScope.$apply(function(){
          done(position);
        });
      }, function(error){
        $rootScope.$apply(function(){
          throw new Error('Unable to retreive position');
        });
      });
    });
  };
}).factory('barcodescan', function(deviceReady, $document, $window, $rootScope){
  return function(done) {
    deviceReady(function(){
      cordova.plugins.barcodeScanner.scan(
      function (result) {
          $rootScope.$apply(function(){
          done(result);
        });
      }, function(error){
        $rootScope.$apply(function(){
          throw new Error('Unable to retreive position');
        });
      });
    });
  };
})