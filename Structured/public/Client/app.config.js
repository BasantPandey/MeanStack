/**
 * Created by basant on 7/24/2016.
 */

(function(){
    angular.module('app.config',[]).config(function($routeProvider) {
        $routeProvider
            // route for the home page
            .when('/Aboutme', {
                templateUrl : 'GetInfo/getInfo.html',
                controller  : 'myCtrl',
                controllerAs : 'vm'
            })
    });
})();