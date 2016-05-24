"use strict";

let displayTagsOldSchool = function() {
    for (let i in arguments) {
        let tag = arguments[i];
        _addToTopic(tag);
    }
};

let _addToTopic = function(tag) {
    console.log("_addToTopic:", tag);
};

displayTagsOldSchool("tahi", "rua", "toru", "wha");

console.log("====================");

let displayTags = function (...tags) {
    for (let i in tags) {
        let tag = tags[i];
        _addToTopic(tag);
    }
};

displayTags("whero", "karaka", "kowhai", "kakariki", "kikorangi", "poropango", "papura");

