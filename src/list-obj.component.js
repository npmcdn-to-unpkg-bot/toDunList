(function() {

    angular.module('myApp')
        .component('listObj', { // the tag for using this is <char-detail>
            templateUrl: "src/list-obj.component.html",
            controller: charDetailControllar,
            bindings: {
                // list: '<',
                onClose: '&'
            }
            
            
        });

    function charDetailControllar(listService) {
        var vm = this;
        // vm.arrayObj = [];
        
        vm.selected = listService.selected;
        vm.addTask = addTask;
        vm.close = close;

        function addTask(task){
            listService.selected.list.tasks.push(task);
            console.log(task);
        }
        function close() {
            vm.onClose();
        }
    }
})();
