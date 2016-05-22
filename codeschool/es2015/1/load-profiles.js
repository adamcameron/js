var loadProfiles = function(userNames){
	if (userNames.length > 3){
		var loadingMessage = "This might take a while...";
		_displaySpinner(loadingMessage);
	}else{
		var flashMessage = "Loading profiles";
		_displayFlash(flashMessage);
	}
};

var _displaySpinner = function(message){
	console.log(message);
};

var _displayFlash = function(message){
	console.log(message);
};









