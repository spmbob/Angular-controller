var app = angular.module("SampleApp",[])
    .controller("defaultCtrl", function ($scope) {
        $scope.value = "--------";

        $scope.setNewValue = function () {
            $scope.value = "hello world";
        }
    });