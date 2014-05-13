'use strict';

var loginApp = angular.module('loginApp', ['ConfigModule']);

// === LOGIN CONTROLLER === //
loginApp.controller('LoginController', function ($scope, $location, memberFactory) {

	$scope.members = memberFactory.getMembers();
	
	$scope.submitted = false;

	$scope.loginSubmit = function(){
		if($scope.login_form.$valid){
			for (var i=0; i<$scope.members.length; i++){
				if ($scope.members[i].username == $scope.login.username && $scope.members[i].password == $scope.login.password){
					$location.url("/welcome");
					break;
				}
				$scope.loginError = "Login details are invalid";
			}
		}else{
			$scope.login_form.submitted = true;
		}
	}

});


// === REGISTER CONTROLLER === //
loginApp.controller('RegisterController', function($scope, $location, memberFactory){

	$scope.members = memberFactory.getMembers();

	$scope.submitted = false;

	$scope.registerSubmit = function(){
		if($scope.register_form.$valid){
			for (var i=0; i<$scope.members.length; i++) {
				if ($scope.members[i].username == $scope.register.username) {
					$scope.registrationError = true;
					$scope.registrationErrorMessage = "Select a different username";
					break;
				}
			}
		}else{
			$scope.register_form.submitted = true;
		}

		if (!$scope.registrationError && $scope.register_form.$valid){
			$scope.members.push({username:$scope.register.username, email:$scope.register.email, password:$scope.register.password});
			$location.url("/login");
		}
	}

});


// === WELCOME CONTROLLER === //
loginApp.controller('WelcomeController', function($scope, memberFactory){

	$scope.members = memberFactory.getMembers();

	// $scope.sortField defines the intial orderBy property to filter the members list in /welcome view.
	$scope.sortField = 'username';
	// reverse enables the sortField filter results to be displayed in opposite order once clicked. (From A-Z to Z-A).
	$scope.reverse = false;

});


// === WELCOME CONTROLLER === //
loginApp.controller('PasswordController', function($scope, memberFactory){

	$scope.members = memberFactory.getMembers();
	
	$scope.passwordRetrieve = "Retrieve Your Password";
	
	$scope.passwordSubmit = function(){
		if($scope.password_form.$valid){
			for (var i=0; i<$scope.members.length; i++) {
				if ($scope.members[i].username == $scope.password.username && $scope.members[i].email == $scope.password.email) {
					$scope.passwordRetrieve = "Your Password Is: " + $scope.members[i].password;
					$scope.passwordError = true;
					break;
				}
			}
		}else{
			$scope.password_form.submitted = true;
		}

		if (!$scope.passwordError && $scope.password_form.$valid){
			$scope.passwordErrorMessage = "Those details don't match any we have";
		}
	}

	
});



// === ROOTSCOPE LOGIN FUNCTION (COMMENTED OUT BECAUSE IT DOES NOT HOLD VALUES OR ALLOW BACK BUTTON) === //
/*
loginApp.run(function(LoginFactory, $rootScope, $location) {
	$rootScope.$on('$routeChangeStart', function(evt) {
		if(!LoginFactory.validLogin){
			$location.url("/login");
		}
		event.preventDefault();
	});
});
*/