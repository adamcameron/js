"use strict";
 
let numberToMemoryUnits = function(x){
	let units = ["kB", "MB", "GB", "TB", "PB"];
	let binaryDivisor = 1024;
	let digits = x;
	let unit = "B";
	while (digits >= binaryDivisor && units.length){
		digits /= binaryDivisor;
		unit = units.shift();
	}

	return Math.floor(digits) + unit;
}

module.exports = numberToMemoryUnits;