'use strict';

loginApp.controller('ProfileController', ['$scope', 'ProfileFactory', 'LoginStatusFactory', function($scope, ProfileFactory, LoginStatusFactory){
	
	$scope.showPage = LoginStatusFactory.getLoginStatus(); // If $scope.showPage = true the page is shown, if false it's not.
	
	// Watches to get the current chosen member when changed in the /welcome view.
	$scope.$watch(ProfileFactory.getUserProfile, function () {
		$scope.profile = ProfileFactory.getUserProfile(); // Setting $scope.chosen to the current chosen members
			console.log($scope.profile);
	});
	
	$scope.likes = Math.floor((Math.random() * 10) + 1);
	$scope.addLike = function(){ // Adds 1 like per call to the chosen members' likes. 
		$scope.likes++;
	};
	
}]);