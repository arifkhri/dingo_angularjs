(function() {

    'use strict';

    angular
        .module('authApp', ['ui.router', 'satellizer'])
        .config(function($stateProvider, $urlRouterProvider, $authProvider) {

            // Satellizer configuration that specifies which API
            // route the JWT should be retrieved from
            $authProvider.loginUrl = 'http://localhost:8000/api/authenticate';

            // Redirect to the auth state if any other states
            // are requested other than users
            $urlRouterProvider.otherwise('/auth');
            
            $stateProvider
                .state('auth', {
                    url: '/auth',
                    templateUrl: 'auth.html',
                    controller: 'AuthCtl as auth'

                
                })
                .state('users', {
                    url: '/users',
                    templateUrl: 'user.html',
                    controller: 'UserController as user'
                });
        });
})();
// .controller('employeesCtrl', function($scope, $http) {
//     var auth = window.btoa("arifakhri" + ':' + "12345678");
//     var base_url = 'http://localhost:8000/';
//     $scope.employee = {};
//     function httpRequest(methodType, subDomain, inputData) {
//         return {
//             method: methodType,
//             url: base_url + subDomain,
//             headers: {
//                 'Authorization' : 'Basic ' + auth,
//                 'Accept' : 'application/json',
//                 'Content-Type': 'application/json; charset=UTF-8',
//             },
//             data: inputData
//         };
//     }

//     $http(httpRequest('GET', '/api/employee/')).then(
//             function (resSuccess){
//                 $scope.employees = resSuccess.data;
//                 console.log(resSuccess);
//             },
//             function (resError){
//                 console.log(resError);
//             }
//     );

//     $scope.save = function() {
//         $http(httpRequest('POST', '/api/employee', $scope.employee)).then(
//             function (resSuccess){
//                 $scope.employees = resSuccess.data;
//             },
//             function (resError){
//                 console.log(resError);
//             }
//         );
//     };