'use strict';

loginApp.controller('LoginController', ['$scope', '$http', '$cookies', '$timeout', '$location', 'LoginStatusFactory', 'LoggedInUserFactory', function($scope, $http, $cookies, $timeout, $location, LoginStatusFactory, LoggedInUserFactory){
	
	$scope.loginSubmit = function(){
		if($scope.login_form.$valid){
			$http({
				method: 'POST',
				url: 'https://localhost:3000/auth/login',
				data: $.param($scope.login)
			}).success(function(data){
				LoginStatusFactory.setLoginStatus(true);
				$scope.login = {};
				$timeout(function() {
					LoggedInUserFactory.setUser(angular.fromJson($cookies.userInfoCookie));
				}, 100);
				$location.path('/welcome');
			}).error(function(error, status){
				$scope.loginErrorMessage = "Oops. Looks like there was a: " + status + " error";
				console.log(error, status, ' from Login');
			});
		}else{
			$scope.login_form.submitted = true;
		}
	};

}]);