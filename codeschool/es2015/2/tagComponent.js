"use strict";

let helpers = require("./miscFunctions.js");

function TagComponent(target, urlPath){
    this.targetElement = target;
    this.urlPath = urlPath;
}

TagComponent.prototype.render = function(){
    helpers.getRequest(this.urlPath, (data) => {
        let tags = data.tags;
        helpers.displayTags(this.targetElement, ...tags); // this scope is that of object
    });
};

let tagComponent = new TagComponent("http://www.imdb.com", "http://en.wikipedia.org");
tagComponent.render();
