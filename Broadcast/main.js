var app = angular.module("SampleApp",[]);

app.controller("senderCtrl", function ($scope, $rootScope) {

    $scope.send = function() {
        $rootScope.$broadcast("messageEvent", {
            message: $scope.messageInput
        });
    }
});

app.controller("receiverCtrl", function($scope) {

    $scope.$on("messageEvent", function(event, args){
        $scope.info = args.message;
    })
});