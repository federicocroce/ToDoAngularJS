function controllerTasks($scope) {

    $scope.invalidTask = false;
    $scope.newTask = '';

    $scope.tasks = [{
        name: 'Task1',
        finish: true
        }, {
        name: 'Task2',
        finish: false
        }];

    $scope.addTask = function () {
        if ($scope.newTask !== '') {

            $scope.tasks.push({
                name: $scope.newTask,
                finish: false
            });
            $scope.newTask = '';
        } else {
            $scope.invalidTask = true;
        }
    };

    $scope.newTaskValue = function () {
        if ($scope.newTask !== '')
            $scope.invalidTask = false;
    };

    $scope.remaining = function () {
        var count = 0;

        angular.forEach($scope.tasks, function (task) {
            count += task.finish ? 0 : 1;
        });
        return count;
    };

    $scope.deleteFinish = function () {
        var oldTasks = $scope.tasks;
        $scope.tasks = [];
        angular.forEach(oldTasks, function (task) {
            if (!task.finish) $scope.tasks.push(task);
        });
    };
}