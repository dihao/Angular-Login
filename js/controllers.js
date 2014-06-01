'use strict';

var loginApp = angular.module('loginApp', ['ngResource', 'ConfigModule']);

// === MAIN CONTROLLER === //
loginApp.controller('MainController', function($scope, loggedInFactory, UserFactory, profileFactory){
	
	$scope.$watch(loggedInFactory.getLoginStatus, function() {
		$scope.loggedIn = loggedInFactory.getLoginStatus();	
		if (!$scope.loggedIn) {
			$scope.loggedOut = true;
		}else{
			$scope.loggedOut = false;
		};
	});
	
	$scope.$watch(UserFactory.getUser, function() {
		$scope.welcome = UserFactory.getUser();		
	});
	
	$scope.userProfile = function(){
	    profileFactory.setChosenMemb($scope.welcome);
	};
	
	$scope.logOut = function(){
		loggedInFactory.setLoginStatus(false);
	};

});




// === LOGIN CONTROLLER === //
loginApp.controller('LoginController', function($scope, $location, memberFactory, loggedInFactory, UserFactory){
	
	memberFactory.getMembers().success(function(data){
	    $scope.members = data;
	});
	
	// Setting the login form submit value to false, will be set to true if the form is invalid on submit
	$scope.submitted = false;
	$scope.loginError = false;

	// The function that is called when the login form is submitted.
	$scope.loginSubmit = function(){
		// If the form is valid.
		if($scope.login_form.$valid){
			// Loop through $scope.members to see if the details entered have a match.
			for (var i=0; i<$scope.members.length; i++){
				// If the details entered do have a match set the location of the view to /welcome.
				if ($scope.members[i].username == $scope.login.username && $scope.members[i].password == $scope.login.password){
					loggedInFactory.setLoginStatus(true);
					UserFactory.setUser($scope.members[i]);
					$scope.loginError = true;
					$location.path("/welcome");
					break;
				}
			};
		// Setting the login form submit value to true, for displaying the ng-show error messages.
		}else{
			$scope.login_form.submitted = true;
		}
						
		if(!$scope.loginError && $scope.login_form.$valid){
			// If the details do not have a match set $scope.loginError an error message to display to the view.
			$scope.loginErrorMessage = "Login details are incorrect. Try again.";
		};	
	};

});




// === WELCOME CONTROLLER === //
loginApp.controller('WelcomeController', function($scope, memberFactory, profileFactory, loggedInFactory){
	
	memberFactory.getMembers().success(function(data){
	    $scope.members = data;
	});

	// Populating $scope.showList with true or false value from loggedInFactory, to show current members list
	$scope.showPage = loggedInFactory.getLoginStatus();
	
	// Function called when user clicks a list member to view their profile
	// This function is handled by profileFactory.
	$scope.clickedMember = function(member){
		profileFactory.setChosenMemb(member);
	};

	// $scope.sortField defines the intial orderBy property to filter the members list in /welcome view.
	$scope.sortField = 'username';
	// reverse enables the sortField filter results to be displayed in opposite order once clicked. (From A-Z to Z-A).
	$scope.reverse = false;
	
});




// === PROFILE CONTROLLER === //
loginApp.controller('ProfileController', function($scope, memberFactory, profileFactory, loggedInFactory){

	memberFactory.getMembers().success(function(data){
	    $scope.members = data;
	});

	// Populating $scope.showList with true or false value from loggedInFactory, to show current members list
	$scope.showPage = loggedInFactory.getLoginStatus();
	
	$scope.$watch(profileFactory.getChosenMemb, function () {
		// Populating $scope.chosen with the chosen members profile to view from profileFactory.
		$scope.chosen = profileFactory.getChosenMemb();		
	});
	
	$scope.addLike = function(){
		$scope.chosen.likes++;
	};
	
});




// === SETTINGS CONTROLLER === //
loginApp.controller('SettingsController', function($scope, loggedInFactory, UserFactory){

	// Populating $scope.members with the members arrays from memberFactory.
	$scope.user = UserFactory.getUser();

	// Populating $scope.showList with true or false value from loggedInFactory, to show current members list
	$scope.showPage = loggedInFactory.getLoginStatus();
	
	$scope.settingsEmail = function(){
		if($scope.email_form.$valid){			
			if($scope.user.email != $scope.change.mail){
				$scope.user.email = $scope.change.mail;
				$scope.successEmailChange = 'Your Email has been changed';
			}else{
				$scope.sameEmailError = 'That is the email you are currently using';
			}
		}else{
			$scope.email_form.submitted = true;
		}
	};
	
	$scope.samePass = false;
	
	$scope.settingsPassword = function(){
		if($scope.password_form.$valid){
			if(($scope.change.oldPass == $scope.user.password) && ($scope.change.newPass == $scope.change.confirmPass)){
				$scope.user.password = $scope.change.confirmPass;
				$scope.successPassChange = 'Your Password has been changed';
			}else{
				if($scope.change.oldPass != $scope.user.password){
					$scope.samePasswordError = 'Your original password is incorrect';
				};
				if($scope.change.newPass != $scope.change.confirmPass){
					$scope.confirmPasswordError = 'Your passwords do not match';
				};
			}
		}else{
			$scope.password_form.submitted = true;
		}
		
	};
	
});




// === EDIT CONTROLLER === //
loginApp.controller('EditController', function($scope, loggedInFactory, UserFactory){

	// Populating $scope.members with the members arrays from memberFactory.
	$scope.user = UserFactory.getUser();

	// Populating $scope.showList with true or false value from loggedInFactory, to show current members list
	$scope.showPage = loggedInFactory.getLoginStatus();
	
	$scope.editName = function(){
		if($scope.name_form.$valid){
			if($scope.user.fname != $scope.edit.fnam){
				$scope.user.fname = $scope.edit.fnam
				$scope.successFnameChange = 'Your First name has been changed';
			}else{
				$scope.sameFnameError = 'That is the First name you currently use';
			};
			if($scope.user.sname != $scope.edit.snam){
				$scope.user.sname = $scope.edit.snam
				$scope.successSnameChange = 'Your Surname name has been changed';
			}else{
				$scope.sameSnameError = 'That is the Surname you currently use';
			};
		}else{
			$scope.name_form.submitted = true;
		}
	};
	
	$scope.editUsername = function(){
		if($scope.username_form.$valid){
			if($scope.user.username != $scope.edit.uname){
				$scope.user.username = $scope.edit.uname
				$scope.successUnameChange = 'Your Username has been changed';
			}else{
				$scope.sameUnameError = 'That is the Username you currently use';
			};
		}else{
			$scope.username_form.submitted = true;
		}
	};
	
	$scope.editWebsite = function(){
		if($scope.website_form.$valid){
			if($scope.user.web != $scope.edit.website){
				$scope.user.web = $scope.edit.website
				$scope.successWebsiteChange = 'Your Website has been changed';
			}else{
				$scope.sameWebsiteError = 'That is the Website you currently have set';
			};
		}else{
			$scope.website_form.submitted = true;
		}
	};
	
});




// === REGISTER CONTROLLER === //
loginApp.controller('RegisterController', function($scope, $location, memberFactory, loggedInFactory){

	memberFactory.getMembers().success(function(data){
	    $scope.members = data;
	});

	// Populating $scope.showList with true or false value from loggedInFactory, to show current members list
	$scope.showPage = loggedInFactory.getLoginStatus();
	
	
	// Setting the login form submit value to false, will be set to true if the form is invalid on submit
	// if set to true it will allow the ng-show error messages to be displayed.
	$scope.submitted = false;

	// The function that is called when the register form is submitted.
	$scope.registerSubmit = function(){
	$scope.registrationErrorMessage = false;
		// Checking if the register form is valid (enough characters, correct type etc).
		if($scope.register_form.$valid){
			// If register form is valid, loop through $scope.members to see if the username entered already exists.
			for (var i=0; i<$scope.members.length; i++) {
				// If the username entered exists user cannot register this username. Set $scope.registrationError to true 
				// and assign an error message to $scope.registrationErrorMessage to display to the view.
				if ($scope.members[i].username == $scope.register.username) {
					$scope.registrationError = true;
					$scope.registrationErrorMessage = "Select a different username";
					break;
				}
			}
		// Setting the login form submit value to true, for displaying the ng-show error messages.
		}else{
			$scope.register_form.submitted = true;
		}

		// If $scope.registrationError is false and the register form is valid 
		if (!$scope.registrationError && $scope.register_form.$valid){
		
			$scope.registrationSuccessMessage = "Your account was created successfully";
			// push the registration details to $scope.members and set the location of the view to /login
			$scope.members.push(
				{
					username:$scope.register.username, 
					fname:$scope.register.fname, 
					sname:$scope.register.sname, 
					email:$scope.register.email,
					imgURL:'https://pbs.twimg.com/profile_images/466574846608949248/V3xkb-VP_400x400.png',
					likes: Math.floor(Math.random() * 100),
					password:$scope.register.password
				}
			);
		}
	};

});




// === PASSWORD CONTROLLER === //
loginApp.controller('PasswordController',function($scope, memberFactory){
	
	// getting the current members from the memberFactory's http request and putting them inside $scope.members.
	memberFactory.getMembers().success(function(data){
	    $scope.members = data;
	});
	
	// $scope.passwordRetrieve will be assigned the users's password if the details they provide are correct.
	$scope.passwordRetrieve = "Forgot Password";
	$scope.passwordAuth = false;
	
	// The function that is called when the reset password_form has been submitted.
	$scope.passwordSubmit = function(){
		// If register form is valid, loop through $scope.members to see if the username and email have a match.
		if($scope.password_form.$valid){
			for (var i=0; i<$scope.members.length; i++) {
			// If the username and email entered do have a match set $scope.passwordRetrieve and $scope.passwordAuth.
				if ($scope.members[i].username == $scope.password.username && $scope.members[i].email == $scope.password.email) {
					$scope.passwordAuth = true;
					$scope.passwordRetrieve = "Your Password Is: " + $scope.members[i].password;
					break;
				}
			}
		}else{
			$scope.password_form.submitted = true;
		}

		// If $scope.passwordAuth is false and the password_form is valid set $scope.passwordErrorMessage.
		if (!$scope.passwordAuth && $scope.password_form.$valid){
			$scope.passwordErrorMessage = "Those details don't match any we have";
		}
		
		
	};
	
});