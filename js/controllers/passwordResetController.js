'use strict';

loginApp.controller('PasswordResetController', ['$scope', '$http', '$location', function($scope, $http, $location){
	
	// Retrieve password function.
	$scope.passwordResetSubmit = function(){
		if($scope.reset_form.$valid){ // If the form is valid do the following.
			$scope.recovery = $location.$$search.recoveryKey;
			$scope.email = $location.$$search.emailAddress;
			$http({
				method: 'POST',
				url: 'https://localhost:3000/userAccount/accountTools/accountRecovery/recoverAccountWithKey',
				data: $.param($scope.recovery, $scope.email, $scope.password),
				withCredentials: true
			}).success(function(data){
				$scope.resetSuccessMessage = "Your Password was reset successfully";
				console.log('success', $scope.recovery, $scope.email);
			}).error(function(error, status){
				$scope.resetErrorMessage = "Oops. Looks like there was a: " + status + " error";
				console.log('error');
			});
		}else{ // Else the form input is not valid. Set submitted to true (shows error messages).
			$scope.reset_form.submitted = true;
		}
	};
}]);