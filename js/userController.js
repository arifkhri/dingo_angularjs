(function(){
	'use strict';
	angular.module('authApp')
	.controller('UserController',UserController);

	function UserController($http){
		var vm = this;
		vm.users;
		vm.errors;

		vm.getUsers = function(){
			// This request will hit the index method in the AuthenticateController
            // on the Laravel side and will return the list of users
            $http.get('http://localhost:8000/api/authenticate').success(function(users){
            	vm.users = users;
            	console.log(vm.users);
            }).error(function(error){
            	vm.error = error;
            });
		}
		
	}
})();