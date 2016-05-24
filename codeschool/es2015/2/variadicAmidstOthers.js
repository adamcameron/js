"use strict";

let f = function(first, ...middleOnes, last) { // rest parameter needs to be the last one :-/
    console.log("First:", first);
    console.log("Middle ones:", middleOnes);
    console.log("Last:", last);
};


f("once upon a time", "chapter 1", "chapter 2", "chapter 3", "and they lived happily ever after");
