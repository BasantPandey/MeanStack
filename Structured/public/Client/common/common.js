/**
 * Created by basant on 7/23/2016.
 */
(function(){
    angular
        .module('app.core',[])
        .factory('common', common);

    common.$inject = ['$http','$q'];

    function common($http,$q){
        var service = {
            $http:$http,
            $q: $q
        }

        return service;
    }

})();
