'use strict';

app.controller('MainCtrl', ['$scope', '$rootScope', '$window', '$location', function ($scope, $rootScope, $window, $location) {
        $scope.slide = '';
        $rootScope.back = function() {
          $scope.slide = 'slide-right';
          $window.history.back();
        }
        $rootScope.go = function(path){
          $scope.slide = 'slide-left';
          $location.url(path);
        }
    }])
    .controller('HomeCtrl', ['$scope', 'CordovaFactory', function ($scope, CordovaFactory) {
            $scope.scan=function(){
                CordovaFactory.scanBarCode().then(function(result){
                        alert("We got a barcode\n" +
                        "Result: " + result.text + "\n" +
                        "Format: " + result.format + "\n" +
                        "Cancelled: " + result.cancelled);
                }, function(error){
                    alert(error);
                });
            }
                   
    }]);
