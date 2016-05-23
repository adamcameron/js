"use strict";

var loadProfiles = function(userNames){
    let names = typeof userNames !== 'undefined' ? userNames : [];
    let namesLength = names.length;
    console.log("Length:", namesLength);
};

console.log("with args");
loadProfiles(["Sam", "Tyler", "Brook"]);

console.log("with no args");
loadProfiles();

console.log("with undefined");
loadProfiles(undefined);