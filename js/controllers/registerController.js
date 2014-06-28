'use strict';

loginApp.controller('RegisterController', ['$scope', '$http', '$location', function($scope, $http, $location){


	/*
$scope.$watch(function() {

		if($scope.yes){
		console.log($scope.yes);

			if($scope.yes){
				$http({
					method: 'POST',
					url: 'https://localhost:3000/auth/login',
					data: $.param($scope.register)
				}).success(function(data){
					$timeout(function() {
						$location.path('/welcome');
					}, 100);
				}).error(function(error, status){
					console.log(error, status, ' from Login');
				});
			}

		}else{
		console.log($scope.yes);

		}

	});
*/



	// Register form submit function
	$scope.registerSubmit = function(){
	
		if($scope.register_form.$valid){
		
			if($scope.register.password == $scope.register.passwordConfirm){
			
				$http({
					method: 'POST',
					url: 'https://localhost:3000/userAccount/accountTools/createNewAccount',
					data: $.param($scope.register)
				}).success(function(data){
					$scope.registrationErrorMessage = "";
					$scope.register = {};
					$scope.yes = true;
				}).error(function(error, status){
					$scope.registrationErrorMessage = "Looks like there was a: " + status + " error";
					$scope.registrationSuccessMessage = "";
					console.log(error, status);
				});	
				
			}else{
			
				$scope.samePasswordError = 'Your password do not match';
				
			}
			
		}else{
		
			$scope.register_form.submitted = true;
		
		}
		
	};
	


	// Function onChange checking if the username is available
	$scope.existingUsername = function(elm){
	
		$scope.username = elm.value; // $scope.files is set to the value of the element passed in. 
		$scope.$apply(); // Apply updates the scope when the file is added.
		$http({
			method: 'GET',
			url: 'https://localhost:3000/accountResources/existingUsername',
			params: {username: $scope.username},
			withCredentials: true
		}).success(function(data){
			if(data.result == true) {
				$scope.userNameUnavailable = "That username is not available";
				console.log(data.result);
			}else{
				$scope.userNameUnavailable = "";
				console.log(data.result);
			}
		}).error(function(error, status){
			console.log(error, status);
		});
		
	};



	// Function onChange checking if the email is available
	$scope.existingEmailAddress = function(elm){
	
		$scope.emailAddress = elm.value; // $scope.emailAddress is set to the values of the element passed in. 
		$scope.$apply(); // Apply updates the scope when the email is added.
		$http({
			method: 'GET',
			url: 'https://localhost:3000/accountResources/registeredEmailAddress',
			params: {emailAddress: $scope.emailAddress},
			withCredentials: true
		}).success(function(data){
			if(data.result == true) {
				$scope.emailAddressUnavailable = "That email address is not available";
				console.log(data.result);
			}else{
				$scope.emailAddressUnavailable = "";
				console.log(data.result);
			}
		}).error(function(error, status){
			console.log(error, status);
		});
		
	};

}]);