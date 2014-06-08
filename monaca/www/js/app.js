var myApp = angular.module('myApp', ['onsen.directives']);

myApp.filter('formatDuration', function() {
        return function(milliseconds) {
            if (milliseconds > 6000) {
                milliseconds = 6000;
            }
            
            var s = Math.floor(milliseconds / 1000);
            var f = Math.floor((milliseconds % 1000) / 100);
            return s +  "." + f;
        }
    });