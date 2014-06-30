'use strict';

loginApp.controller('TwoStepController', ['$scope', '$http', '$cookies', function($scope, $http, $cookies){

	// Assigning the userInfoCookie to the variable userCookie.
	var userCookie = angular.fromJson($cookies.userInfoCookie);

	// If the userInfoCookie is set. 
  	if(userCookie != undefined) {
  		
  		$scope.showPage = true; // $scope.showPage is true (page can be shown).
  		$scope.user = userCookie; // $scope.user gets the content of userCookie.
  		
  	};



	// Two Step Function
	$scope.twoStepAuthTel = function(){

		if($scope.two_step_tel_form.$valid){ // If the form is valid do the following.

				$http({
					method: 'PATCH',
					url: 'https://localhost:3000/',
					data: $.param($scope.auth)
				}).success(function(data){
					$scope.successTwoStepTel = 'We have sent you text message';
					$scope.auth = "";
				}).error(function(error, status){
					console.log(error, status, 'error');
				});
					$scope.successTwoStepTel = 'We have sent you text message';
					

		}else{ // Else the form is invalid.

			$scope.two_step_tel_form.submitted = true;

		}

	};
  	
  	
  	
  	
	// Enter code Function
	$scope.enterCode = function(){

		if($scope.enter_code_form.$valid){ // If the form is valid do the following.

			$scope.$emit('LOADING'); // Emit LOADING, sets $scope.loading to true. Shows loading indicator.
				$http({
					method: 'PATCH',
					url: 'https://localhost:3000/',
					data: $.param($scope.auth)
				}).success(function(data){
					$scope.successTwoStepCode = 'Success';
				}).error(function(error, status){
					console.log(error, status, 'error');
				});
					$scope.successTwoStepCode = 'Success';

		}else{ // Else the form is invalid.

			$scope.enter_code_form.submitted = true;

		}

	};

}]);