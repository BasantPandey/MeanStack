/**
 * Created by DELL on 4/22/2016.
 */
(function(){
    "use strict";
    angular.module("app.getInfo",[])
        .controller("myCtrl", getInfo);
    getInfo.$inject = ['common','data'];

    function getInfo(common,data){

          var vm = this;
          vm.infos=[];
          vm.add = add;
          vm.edit = edit;
          vm.update= update;
          vm.del= del;
          var $http = common.$http;
          refresh();

          function add(){
              $http.post('/getinfo',vm.info).success(function(resp){
                  console.log(resp);
                  refresh();
              });
          }

          function refresh(){
              data.GetData().then(function(res) {
                 vm.infos= res.data;
                   return vm.infos;
              });
              vm.info={};
          }

          function edit(id){
              data.Edit(id).then(function(res) {
                  console.log(res.data);
                  vm.info=res.data;
              });
          }

          function update(id){
              console.log("Update ID:" + id);
              data.Update(id,vm.info).then(function (res) {
                  refresh();
              })
          }
          function del(id){
              data.Delete(id).then(function(resp){
                  refresh();
              })
              //console.log("Delete ID:" + id);
              //$http.delete('/getinfo/'+id).success(function(resp){
              //    refresh();
              //});
          }

    }
})();
