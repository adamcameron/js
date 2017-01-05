var express = require("express");
var app = express();

app.get("/gday", function(request, response){
	response.send("G'day world");
});

app.get("/howdy", function(request, response){
	response.write("Howdy world");
	response.end();
});

app.get("/numbers", function(request, response){
	var numbers = ["tahi", "rua", "toru", "wha"];
	response.send(numbers);
});

app.get("/colours", function(request, response){
	var rainbow = ["whero","karaka","kowhai","kakariki","kikorangi","poropango","papura"];
	response.json(rainbow);
});

app.get("/rainbow", function(request, response){
	response.redirect(301, "/colours");
});

app.get("/days", function(request, response){
	var week = "<ol><li>Rāhina</li><li>Rātū</li><li>Rāapa</li><li>Rāpare</li><li>Rāmere</li><li>Rāhoroi</li><li>Rātapu</li></ol>";
	response.send(week);
});

app.listen(3000, function(){
	console.log("Listening on port 3000");
});