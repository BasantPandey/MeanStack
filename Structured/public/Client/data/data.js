/**
 * Created by basant on 7/23/2016.
 */
/**
 * Created by basant on 7/16/2016.
 */

(function() {

    angular
        .module('app.data',[])
        .factory('data', data);

    data.$inject=['common'];

    function data(common){

        var $http = common.$http;

        var service = {
            GetData : GetData,
            Edit:Edit,
            Update:update,
            Delete:Delete
        }
        return service;

        function Edit (id) {
            return $http.get('/getinfo/' + id).then(GetInfoPass);
            function GetInfoPass(res) {
                return res;
            }
        }
        function Delete(id){
            console.log("Delete ID:" + id);
            return $http.delete('/getinfo/'+id).success(GetInfoPass);
            function GetInfoPass(resp) {
                return resp;
            }
        }
        function update(id, data){
            console.log("Update ID:" + id);
            return $http.put('/getinfo/'+id, data).success(GetInfoPass);
            function GetInfoPass(res) {
                return res;
            }
        }

        function GetData() {
            return $http.get('/getinfo').then(GetInfoPass);
            function GetInfoPass(res) {
                return res;
            }
        }
    }

})();
