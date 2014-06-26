'use strict';

loginApp.controller('SocialController', ['$scope', '$http', function($scope, $http){
	
	
	$scope.socialRegister = function(){
	
		if($scope.social_form.$valid){
		
			if($scope.social.newPassword != $scope.social.confirmPassword){
				$scope.passwordDuplicateError = "You're password do not match";
			}
			
			$http({ 	
				method: 'GET',
				url: 'https://localhost:3000/userAccount/accountTools/createNewAccountWithSocialMedia'
			}).success(function(data) {
				console.log(data);
			}).error(function(error, status) { 
				console.log(error, status, 'error. Welcome.');
			});
	
		}else{
	
			$scope.social_form.submitted = true;
	
		}	
		
	}
	

}]);