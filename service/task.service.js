(function () {

    angular.module('myApp')
        .service('listService', listService);

    function listService() {
        var vm = this;
        vm.selected = {list: {} };

    }
})();