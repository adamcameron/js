var express = require("express");
var router = express.Router();

var bodyParser = require("body-parser");
var parseUrlencoded = bodyParser.urlencoded({extended:false});

var blocks = {
	"Fixed" : "Fastened securely in position",
	"Movable" : "Capable of being moved",
	"Rotating" : "Moving in a circle around its centre"
};

router.route("/")
.get(function(request, response){
	var blockTypes = Object.keys(blocks);
	if (request.query.limit >= 0){
		var blocksToSend = blockTypes.slice(0, request.query.limit);
		response.json(blocksToSend);
	}else{
		response.json(blockTypes);
	}
})
.post(parseUrlencoded, function(request, response){
	var newBlock = request.body;
	blocks[newBlock.name] = newBlock.description;
	return response.status(201).json(newBlock.name);
});

router.route("/:name")
.all(function(request, response){
	var name = request.params.name;
	var canonicalName = name[0].toUpperCase() + name.slice(1).toLowerCase();

	request.canonicalName = canonicalName;
	
	next();
})
.get(function(request, response){
	var block = request.canonicalName;
	var description = blocks[block];
	if (description) {
		return response.json(description);
	}
	return response.status(404).json("Could not find block type " + block + "(" + JSON.stringify(blocks) + ")");
}).delete(function(request, response){
	var block = request.canonicalName;
	delete blocks[block];
	return response.sendStatus(201);
});

module.exports = router;
