'use strict';

loginApp.controller('LoginController', ['$scope', '$http', '$cookies', '$timeout', '$location', 'ProfileFactory', function($scope, $http, $cookies, $timeout, $location, ProfileFactory){
		
	$scope.loginSubmit = function(){
	
		if($scope.login_form.$valid){ // If the form is valid
			$http({
				method: 'POST',
				url: 'https://localhost:3000/auth/login',
				data: $.param($scope.login)
			}).success(function(data){
				$scope.login = {};
				$timeout(function() {
					ProfileFactory.setUserProfile(angular.fromJson($cookies.userInfoCookie));
					$location.path('/welcome');
				}, 100);
			}).error(function(error, status){
				$scope.loginErrorMessage = error.error;
				console.log(error, status, ' from Login');
			});
		}else{ // Else the form is invalid
			$scope.login_form.submitted = true;
		}
		
	};

}]);