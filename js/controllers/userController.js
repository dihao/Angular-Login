'use strict';

loginApp.controller('UserController', ['$scope', '$cookies', function($scope, $cookies){
	
	// Assigning the userInfoCookie to the variable userCookie.
	var userCookie = angular.fromJson($cookies.userInfoCookie);
	
	// If the userInfoCookie is set, $scope.showPage is true (page can be shown).
  	if(userCookie != undefined) {
  	
  		$scope.showPage = true;
  	
  	};
  	
  	// Setting $scope.user to the userInfoCookie stored inside the variable userCookie.
  	$scope.user = userCookie;

}]);