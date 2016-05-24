"use strict";

let helpers = require("./miscFunctions.js");

let myCallback = function(data){
    let tags = data.tags;
    helpers.displayTags(...tags);
};


helpers.getRequest("http://www.cricket.org", myCallback);
