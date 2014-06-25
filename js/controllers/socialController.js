'use strict';

loginApp.controller('SocialController', ['$scope', '$http', '$cookies', '$location', function($scope, $http, $cookies, $location){
	
	/*
// Assigning the userInfoCookie to the variable userCookie.
	var userCookie = angular.fromJson($cookies.userInfoCookie);
	
	// If the userInfoCookie is set. 
  	if(userCookie != undefined) {
  		
  		$scope.showPage = true; // $scope.showPage is true (page can be shown).
  		$scope.user = userCookie; // $scope.user gets the content of userCookie.
  		
  	};
*/
	$scope.socialRegister = function(){
		if($scope.social_form.$valid){ // If the form is valid do the following.
		
			if($scope.social.newPassword != $scope.social.confirmPassword){
				$scope.passwordDuplicateError = "You're password do not match";
			}
			
			console.log('Build functin');
	
		}else{ // Else the form is invalid.
	
			$scope.social_form.submitted = true;
	
		}	
	}
	

}]);