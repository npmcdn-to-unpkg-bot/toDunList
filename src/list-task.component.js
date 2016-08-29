(function(){

    angular.module('myApp')
        .component('listTask', { // the tag for using this is <char-detail>
            templateUrl: "src/list-task.component.html",
            controller: charDetailController
            
                  })
        .config(charDetailConfig);

    function charDetailConfig($stateProvider) {
        $stateProvider.state('main', {
            url: '/main',
            template: '<list-task></list-task>'
        });
    }
    function charDetailController(listService ,toastr) {

        var vm = this;
        vm.lists = [];
        vm.arrayObj = [];
        vm.seletedList = listService.selectedList;
        // vm.myTask = taskService.myTask;
        vm.save = save;
        vm.taskBut = taskBut;
        vm.toTask = toTask;
        vm.close = close;
        vm.toastr = toastr;

        vm.selectList = selectList;


        // vm.currentList = currentList;

        // function close() {
        //     vm.onClose(); // call output binding
        // }
        function save(listName) {
            toastr.info(listName ,"you have added List");
            // vm.getTask = vm.task;
            vm.lists.push({listName: listName, tasks: []});
            // console.log(lists);

            //adding a list
            //lists.push({name: name, todos:[]});
            //have array in array so i can store the strings in the task so what save data
            //separate array for each task
            //vm.arrayTask.push(vm.task, vm.arrayObj);
        }
        function selectList(list) {
            
            listService.selected.list = list;

            // vm.selectedTask = taskService.selectedTask;
            // console.log(vm.selectedList);
        }
        // function close() {
        //     self.selectedTask = listService.selectedTask = undefined;
        // }

        function clickOnTask(){


        }
        function toTask() {
            console.log("oyoyoyo");
        }
        function taskBut(selectedList) {
            console.log(selectedList, listArry);
            vm.currentList = selectedList;
            vm.getObj = vm.obj;
            vm.arrayObj.push(vm.obj);

        }
    }

})();
