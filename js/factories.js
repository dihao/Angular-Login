'use strict';

// === MEMBER FACTORY TO STORE CURRENT MEMBERS === //
loginApp.factory('memberFactory', function() {

	// Array of current member: username's, email's, password's and image's.
	var members = [
		{
			username: 'alan',
			fname: 'alan',
			sname: 'dunning',
			email: 'alan@email.com', 
			password: 'alan', 
			imgURL: 'https://pbs.twimg.com/profile_images/1687271182/IMG_0011_bigger.JPG', 
			likes: Math.floor(Math.random() * 100),
			web: 'www.redninja.co.uk',
			type: 1
		},
		{
			username: 'lee', 
			fname: 'lee',
			sname: 'omar',
			email: 'lee@email.com', 
			password: 'lee', 
			imgURL: 'https://pbs.twimg.com/profile_images/1247941572/62107_443414578150_513583150_5083527_6334052_n_bigger.jpg', 
			likes: Math.floor(Math.random() * 100),
			web: 'www.redninja.co.uk',
			type: 2
		},
		{
			username: 'xi',
			fname: 'xi',
			sname: 'Sizhe', 
			email: 'xi@email.com', 
			password: 'xi', 
			imgURL: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_5_200x200.png', 
			likes: Math.floor(Math.random() * 100),
			web: 'www.redninja.co.uk',
			type: 3
		},
		{
			username: 'sam', 
			fname: 'sam',
			sname: 'ryecroft', 
			email: 'sam@email.com', 
			password: 'sam', 
			imgURL: 'https://scontent-a-lhr.xx.fbcdn.net/hphotos-frc1/t1.0-9/10247444_851650048183757_1789479644600810623_n.jpg', 
			likes: Math.floor(Math.random() * 100),
			web: 'www.redninja.co.uk',
			type: 1
		},
		{
			username: 'sean',
			fname: 'sean',
			sname: 'wright', 
			email: 'sean@email.com', 
			password: 'sean', 
			imgURL: 'https://pbs.twimg.com/profile_images/466574846608949248/V3xkb-VP_400x400.png', 
			likes: Math.floor(Math.random() * 100),
			web: 'www.redninja.co.uk',
			type : 2
		},
		{
			username: 'ben', 
			fname: 'ben',
			sname: 'blackmore', 
			email: 'ben@email.com', 
			password: 'ben', 
			imgURL:'https://pbs.twimg.com/profile_images/434672519820214272/LBqErBda.jpeg', 
			likes: Math.floor(Math.random() * 100),
			web: 'www.redninja.co.uk',
			type: 3
		},
		{
			username: 'felix',
			fname: 'felix',
			sname: 'brassier',  
			email: 'felix@email.com', 
			password: 'felix', 
			imgURL: 'https://pbs.twimg.com/profile_images/444221163166646272/6eXdssC2.jpeg', 
			likes: Math.floor(Math.random() * 100),
			web: 'www.redninja.co.uk',
			type: 1
		},
		{
			username: 'ste', 
			fname: 'ste',
			sname: 'hassall', 
			email: 'ste@email.com', 
			password: 'ste', 
			imgURL: 'https://pbs.twimg.com/profile_images/268982538/designfunction_twitter_icon.gif',
			likes: Math.floor(Math.random() * 100),
			web: 'www.redninja.co.uk',
			type: 2
		},
		{
			username: 'ashley', 
			fname: 'ashley',
			sname: 'culvin', 
			email: 'ashley@email.com', 
			password: 'ashley', 
			imgURL: 'https://pbs.twimg.com/profile_images/3535292153/63c55d8b412bdfa0c8e96eb1968c4cc4.jpeg', 
			likes: Math.floor(Math.random() * 100),
			web: 'www.redninja.co.uk',
			type: 3
		},
		{
			username: 'elliot', 
			fname: 'elliot',
			sname: 'adderton', 
			email: 'elliot@email.com', 
			password: 'elliot', 
			imgURL: 'https://pbs.twimg.com/profile_images/466574846608949248/V3xkb-VP_400x400.png', 
			likes: Math.floor(Math.random() * 100),
			web: 'www.redninja.co.uk',
			type: 1
		},
		{
			username: 'lewis', 
			fname: 'lewis',
			sname: 'dohren', 
			email: 'lewis@email.com', 
			password: 'lewis', 
			imgURL: 'https://lh4.googleusercontent.com/-f4UVt9c-FxY/T3is3CfYmuI/AAAAAAAAAGM/aiUnnt_fF8M/w968-h964-no/10150405668665473.jpg', 
			likes: Math.floor(Math.random() * 100),
			web: 'www.redninja.co.uk',
			type: 2
		},
		{
			username: 'jordy', 
			fname: 'jordy',
			sname: 'van juijk',  
			email: 'jordy@email.com', 
			password: 'jordy', 
			imgURL: 'https://pbs.twimg.com/profile_images/378800000821089440/2a5e045a20a93c3aea6f3b1823555c60.png', 
			likes: Math.floor(Math.random() * 100),
			web: 'www.redninja.co.uk',
			type: 3
		},
		{
			username: 'adam', 
			fname: 'adam',
			sname: 'johnston',
			email: 'adam@email.com', 
			password: 'adam', 
			imgURL: 'https://pbs.twimg.com/profile_images/466574846608949248/V3xkb-VP_400x400.png', 
			likes: Math.floor(Math.random() * 100),
			web: 'www.redninja.co.uk',
			type: 1
		},
		{
			username: 'bridget', 
			fname: 'bridget',
			sname: 'waters', 
			email: 'bridget@email.com', 
			password: 'bridget', 
			imgURL: 'https://pbs.twimg.com/profile_images/3039021143/1ece24ef3cbab117acddc555e69cfa3b.jpeg', 
			likes: Math.floor(Math.random() * 100),
			web: 'www.redninja.co.uk',
			type: 2
		}
	];
	
	// === Create empty factory object to be populated with the members array's. === //
	var factory = {};
	
	// === Populate the empty factory object with the members array's using .getMembers. === //
	factory.getMembers = function(){
		return members;
	};
	
	// === The memberFactory returns the factory object, now populated with the members array. === //
	return factory;
});



// === PROFILE FACTORY TO VIEW MEMBER PROFILE === //
loginApp.factory('profileFactory', function(){
	
	// Empty object to store chosen member array of values

	var chosen_memb = [];
	
	return {
		// getChosenMemb returns the value of the chosen_memb object
		getChosenMemb: function(){
			return chosen_memb;
		},
		// setChosenMemb passes in then sets the value of the chosen_memb object 
		setChosenMemb: function(member){
			chosen_memb = member;
		}
	};

});





// === LOGGED IN FACTORY TO SEE IF THE USER IS LOGGED IN === //
loginApp.factory('loggedInFactory', function () { 

	// Empty var to store true or false string
	var logged = false;
	
	return {
		// getLoginStatus returns the string or empty string within logged var 
		getLoginStatus: function() {
			return (logged);
		},
		// setLoginStatus passes in then sets the string or empty string of the logged var 
		setLoginStatus: function(value) {
			logged = value;
		}
	};
	
});



// === PROFILE FACTORY TO SELECT LOGGED IN MEMBER PROFILE === //
loginApp.factory('UserFactory', function(){
	
	// Empty object to logged in user
	var user = [];
	
	return {
		// getUser returns the value of the user object
		getUser: function(){
			return user;
		},
		// setUser passes in then sets the value of the user object 
		setUser: function(member){
			user = member;
		}
	};

});