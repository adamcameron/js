var loadProfiles = function(userNames){
	const MAX_USERS = 3;
	if (userNames.length > MAX_USERS){
		let loadingMessage = "This might take a while...";
		_displaySpinner(loadingMessage);
		for (let i in userNames) {
			_fetchProfile("/users/" + userNames[i] , function(){
				console.log("Fetched for ", userNames[i]);
			});
		}
	}else{
		let flashMessage = "Loading profiles";
		_displayFlash(flashMessage);
	}

	// console.log(flashMessage); // errors
};

var _displaySpinner = function(message){
	console.log(message);
};

var _displayFlash = function(message){
	console.log(message);
};

var _fetchProfile = function(path, callback) {
	console.log("Fetching from " + path);
	setTimeout(callback, 1000)
};








