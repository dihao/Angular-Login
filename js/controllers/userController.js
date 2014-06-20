'use strict';

loginApp.controller('UserController', ['$scope', '$cookies', function($scope, $cookies){

	var userCookie = angular.fromJson($cookies.userInfoCookie);
  	if(userCookie != undefined) { $scope.showPage = true; };
  	  		
	$scope.user = angular.fromJson($cookies.userInfoCookie); // Setting $scope.chosen to the current chosen members		

	$scope.likes = Math.floor((Math.random() * 10) + 1);
	$scope.addLike = function(){
	 
		$scope.likes++;
		
	};

}]);