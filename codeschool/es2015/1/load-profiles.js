var loadProfiles = function(userNames){
	if (userNames.length > 3){
		let loadingMessage = "This might take a while...";
		_displaySpinner(loadingMessage);
	}else{
		let flashMessage = "Loading profiles";
		_displayFlash(flashMessage);
	}

	console.log(flashMessage);
};

var _displaySpinner = function(message){
	console.log(message);
};

var _displayFlash = function(message){
	console.log(message);
};









