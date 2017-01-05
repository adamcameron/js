module.exports = function(request, response, next){
	if (request.url === "/blocks") {
		response.status(404).json("surprised this works as json");
	}
	next();
};