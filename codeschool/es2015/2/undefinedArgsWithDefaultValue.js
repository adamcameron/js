"use strict";

function loadProfiles(userNames=[]){
    let namesLength = userNames.length;
    console.log("Length:", namesLength);
}

console.log("with args");
loadProfiles(["Sam", "Tyler", "Brook"]);

console.log("with no args");
loadProfiles();

console.log("with undefined");
loadProfiles(undefined);