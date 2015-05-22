'use strict';

app.factory('CordovaFactory', function($q){
     var factory = {};
     factory.scanBarCode=function(){
         var deferred = $q.defer();
         cordova.plugins.barcodeScanner.scan(
          function (result) {
             deferred.resolve(result);
          }, function(error){
             deferred.reject('Scanning failed');
          });
          return deferred.promise;
     };
    
    factory.getLocation=function(){
         var deferred = $q.defer();
         navigator.geolocation.getCurrentPosition(function(position){
            deferred.resolve(position);
          }, function(error){
            deferred.reject('get location failed');
          });
        return deferred.promise;
    };
     return factory;       
});