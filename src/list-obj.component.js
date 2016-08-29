(function () {

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
            vm.deleteTask = deleteTask;
            vm.selectedTask = selectedTask;
            vm.markComplete = markComplete;
            vm.deleteCompleted = deleteCompleted;
            // vm.arrayObj = [];

            vm.selected = listService.selected;
            vm.addTask = addTask;
            vm.close = close;

            function addTask(task) {
                listService.selected.list.tasks.push({
                    name: task,
                    completed: false,
                    icon: 'http://vignette1.wikia.nocookie.net/okami/images/6/60/X_mark.png/revision/20130610184558'
                });
                console.log(task);
            }

            function selectedTask(ifDone) {
                ifDone = true;
                console.log(ifDone);
            }

            function deleteTask(index) {
                //create a variable that's an empty array
                //set that variable equal to your actual array of tasks
                //if statement where you loop through your array of task and checking if its done
                listService.selected.list.tasks.splice(index, 1);

            }

            function deleteCompleted() {
                var deleteArray = [];
                for (var i = 0; i < listService.selected.list.tasks.length; i++) {
                    if (listService.selected.list.tasks[i].completed) {
                        deleteArray.push(listService.selected.list.tasks[i]);
                    }

                }
                for (var j = 0; j < deleteArray.length; j++) {
                    var index = listService.selected.list.tasks.indexOf(deleteArray[j]);
                    listService.selected.list.tasks.splice(index, 1);

                }

            }
            function markComplete(task) {
                task.completed = true;
                task.icon = 'http://www.clker.com/cliparts/2/k/n/l/C/Q/transparent-green-checkmark-hi.png';

            }
            function close() {
                vm.onClose();
            }
        }
    }

    )();
