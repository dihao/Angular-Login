'use strict';

loginApp.controller('EditController', ['$scope', '$http', '$cookies', 'LoginStatusFactory', 'LoggedInUserFactory', function($scope, $http, $cookies, LoginStatusFactory, LoggedInUserFactory){

	var userCookie = $cookies.userInfoCookie;
  	if(userCookie != undefined) { $scope.showPage = true; }
	
	$scope.user = LoggedInUserFactory.getUser(); // Getting the logged in user and putting it in $scope.user		
	
	// Function onChange for when an image file is added
	$scope.filesChanged = function(elm){
		$scope.files = elm.files; // $scope.files is set to the values of the element passed in (workaround for file ng-model) 
		$scope.$apply(); // Apply updates the scope when the file is added.
	};
	// Edit Image
	$scope.editImg = function(){
		if($scope.user.imgURL != $scope.files[0].name){// If old image & new image are not the same change the image.
			$scope.user.imgURL = $scope.files[0].name;
			$scope.successImgChange = 'Your Image has been changed';
		}else{ // If the images are the same.
			$scope.sameImgError = 'That is the Image you currently have set';
		};
		console.log($scope.files);
	};
	
	// Edit name
	$scope.editName = function(){
		if($scope.name_form.$valid){ // If the form is valid do the following.
			$http({
					method: 'POST',
					url: 'https://localhost:3000/',
					data: $.param($scope.edit.firstName, $scope.edit.surname)
				}).success(function(data){
					$scope.successFirstNameChange = 'Your First name has been changed';
					$scope.successSurnameChange = 'Your Surname name has been changed';
					console.log('success');
				}).error(function(error, status){
					$scope.sameFirstNameError = 'That is the First name you currently use';
					$scope.sameSurnameError = 'That is the Surname you currently use';
					console.log(error, status, 'error');
				});
			/*
if($scope.user.fname != $scope.edit.fnam){ // If old fname & new fname are not the same change the fname.
				$scope.user.firstName = $scope.edit.firstName;
				$scope.successFirstNameChange = 'Your First name has been changed';
			}else{ // If the fnames are the same.
				$scope.sameFirstNameError = 'That is the First name you currently use';
			};
			if($scope.user.surname != $scope.edit.surname){ // If old lname & new lname are not the same change the lname.
				$scope.user.surname = $scope.edit.surname
				$scope.successSurnameChange = 'Your Surname name has been changed';
			}else{ // If the lnames are the same.
				$scope.sameSurnameError = 'That is the Surname you currently use';
			};
*/
		}else{ // Else the form input is not valid. Set submitted to true to show error messages.
			$scope.name_form.submitted = true;
		}
	};
	
	// Edit username
	$scope.editUsername = function(){
		if($scope.username_form.$valid){ // If the form is valid do the following.
			$http({
					method: 'POST',
					url: 'https://localhost:3000/',
					data: $.param($scope.edit.username)
				}).success(function(data){
					$scope.successUsernameChange = 'Your Username has been changed';
					console.log('success');
				}).error(function(error, status){
					$scope.sameUsernameError = 'That is the Username you currently use';
					console.log(error, status, 'error');
				});
			/*
if($scope.user.username != $scope.edit.username){ // If old uname & new uname are not the same change the uname.
				$scope.user.username = $scope.edit.username
				$scope.successUsernameChange = 'Your Username has been changed';
			}else{ // If the unames are the same.
				$scope.sameUsernameError = 'That is the Username you currently use';
			};
*/
		}else{ // Else the form input is not valid. Set submitted to true to show error messages.
			$scope.username_form.submitted = true;
		}
	};
	
	// Edit website
	$scope.editWebsite = function(){
		if($scope.website_form.$valid){ // If the form is valid do the following.
			$http({
					method: 'POST',
					url: 'https://localhost:3000/',
					data: $.param($scope.edit.website)
				}).success(function(data){
					$scope.successWebsiteChange = 'Your Website has been changed';
					console.log('success');
				}).error(function(error, status){
					$scope.sameWebsiteError = 'That is the Website you currently have set';
					console.log(error, status, 'success');
				});
			/*
if($scope.user.web != $scope.edit.website){ // If old website & new website are not the same change the website.
				$scope.user.web = $scope.edit.website
				$scope.successWebsiteChange = 'Your Website has been changed';
			}else{ // If the websites are the same.
				$scope.sameWebsiteError = 'That is the Website you currently have set';
			};
*/
		}else{ // Else the form input is not valid. Set submitted to true to show error messages.
			$scope.website_form.submitted = true;
		}
	};
	
}]);