(function(){
	'use strict';
	angular.module('authApp').controller('AuthCtl' , AuthCtl);
	function AuthCtl($auth,$state){
		var vm = this;
		vm.login = function(){
			var credentials = {
				email: vm.email,
				password: vm.password
			};

			// use setillizer $auth service to login
			$auth.login(credentials).then(function(data){
				// if logged redirect to users state
				// console.log(credentials);
				$state.go('users',{});
			});
		};
	}
})();