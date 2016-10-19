var app = angular.module("SampleApp",[]);

app.controller("baseCtrl", function ($scope) {

    $scope.value = { data: "base value"};

    $scope.changeValue1 = function() {
        $scope.value.data = "changeValue1  - " + new Date().toLocaleTimeString();
    }
});

app.controller("derivedCtrl", function($scope) {

    $scope.changeValue2 = function() {
        $scope.value.data = "changeValue2  - " + new Date().toLocaleTimeString();
    }
});