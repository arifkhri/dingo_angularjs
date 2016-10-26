//// create controller that injected services

var app_bycycle = angular.module('bycycle_module', ['module_crudapi']);
app_bycycle.controller('bycycle_controller', function($scope, Bycycle) {
    $scope.bycycle = {};
    $scope.save_bycycle = function() {
        $scope.bycycles = Bycycle.save({
            name : $scope.bycycle.name,
            series : $scope.bycycle.series
        });
    };
    $scope.list_bycycles = function() {
        $scope.bycycles = Bycycle.index();
    };
    $scope.show_bycycle = function() {
        $scope.bycycles = Bycycle.show({
            id : $scope.bycycle.id
        });
    };
    $scope.update_bycycle = function() {
        $scope.bycycles = Bycycle.update({
            id : $scope.bycycle.id,
            name : $scope.bycycle.name,
            series : $scope.bycycle.series
        });
    };
    $scope.delete_bycycle = function() {
        if ($scope.bycycle.id == null) {
            $scope.bycycle.id = 0;
        }
        $scope.bycycles = Bycycle.destroy({
            id : $scope.bycycle.id
        });
    };
});