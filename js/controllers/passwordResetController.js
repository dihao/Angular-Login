'use strict';

loginApp.controller('PasswordResetController', ['$scope', '$http', '$cookies', '$location', function($scope, $http, $cookies, $location){

	var userCookie = $cookies.userInfoCookie;
  	if(userCookie != undefined) { $scope.showPage = true; }
	
	// Retrieve password function.
	$scope.passwordResetSubmit = function(){
		if($scope.reset_form.$valid){ // If the form is valid do the following.
			$scope.reset.recovery = $location.$$search.recoveryKey;
			$scope.reset.emailAddress = $location.$$search.emailAddress;
			console.log($scope.recoveryKey, $scope.emailAddress )
			$http({
				method: 'POST',
				url: 'https://localhost:3000/userAccount/accountTools/accountRecovery/recoverAccountWithKey',
				data: $.param($scope.reset),
				cons
				withCredentials: true
			}).success(function(data){
				$scope.resetSuccessMessage = "Your Password was reset successfully";
				console.log('success', $scope.recovery, $scope.email);
			}).error(function(error, status){
				$scope.resetErrorMessage = "Oops. Looks like there was a: " + status + " error";
				console.log(error, status, 'error');
			});
		}else{ // Else the form input is not valid. Set submitted to true (shows error messages).
			$scope.reset_form.submitted = true;
		}
	};
}]);