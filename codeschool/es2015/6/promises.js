"use strict";
function getPollResultsFromServer(pollName) {
    return new Promise(function(resolve, reject){
        let url = 'http://www.example.com/bung/lala';
        let request = new XMLHttpRequest();
        request.open("get", url);
        request.onload = function(){
            if (request.status >= 200 && request.status < 400) {
                resolve("all good");
            }else{
                reject(new Error("no good"));
            }
        };
        request.onerror = function(){
            reject(new Error("it errored"));
        };
        request.send();
    });
}

let resolver = function(value){
    console.log(`RESOLVED with ${value}`);
};
let rejecter = function(value){
    console.log(`REJECTED with ${value}`);
};

getPollResultsFromServer("Sass vs. Less")
    .then(resolver, rejecter)
    .then(resolver, rejecter);