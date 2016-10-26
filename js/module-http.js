
var http_module = angular.module('employees', []);
http_module.controller('employeesCtrl', function($scope, $http) {
    var auth = window.btoa("arifakhri" + ':' + "12345678");
    var base_url = 'http://localhost:8000/';
    $scope.employee = {};
    function httpRequest(methodType, subDomain, inputData) {
        return {
            method: methodType,
            url: base_url + subDomain,
            headers: {
                'Authorization' : 'Basic ' + auth,
                'Accept' : 'application/json',
                'Content-Type': 'application/json; charset=UTF-8',
            },
            data: inputData
        };
    }

    $http(httpRequest('GET', '/api/employee/')).then(
            function (resSuccess){
                $scope.employees = resSuccess.data;
                console.log(resSuccess);
            },
            function (resError){
                console.log(resError);
            }
    );

    $scope.save = function() {
        $http(httpRequest('POST', '/api/employee', $scope.employee)).then(
            function (resSuccess){
                $scope.employees = resSuccess.data;
            },
            function (resError){
                console.log(resError);
            }
        );
    };


    $scope.index = function() {
        $http(httpRequest('GET', '/api/employee')).then(
            function (resSuccess){
                $scope.employees = resSuccess.data;
                console.log(resSuccess);

            },
            function (resError){
                console.log(resError);
            }
        );
    };


    $scope.show = function(id) {
        $http(httpRequest('GET', '/api/employee/' + id)).then(
            function (resSuccess){
                $scope.employees = resSuccess.data;
                console.log(resSuccess,id);
            },
            function (resError){
                console.log(resError);
            }
        );
    };

    $scope.edit = function(id) {
        $http(httpRequest('GET', '/api/employee/' + id)).then(
            function (resSuccess){
                $scope.employees = resSuccess.data;
                console.log(resSuccess,id);
            },
            function (resError){
                console.log(resError);
            }
        );
    };


    $scope.update = function(id) {
        $http(httpRequest('PUT', '/api/employee/' + id, $scope.employees.employee)).then(
            function (resSuccess){
                $scope.employees = resSuccess.data;
                console.log(resSuccess,id);

            },
            function (resError){
                console.log(resError);
            }
        );
    };


    $scope.delete = function(id) {
        $http(httpRequest('DELETE', '/api/employee/' + id)).then(
            function (resSuccess){
                $scope.employees = resSuccess.data;
            },
            function (resError){
                console.log(resError);
            }
        );    
    };
});