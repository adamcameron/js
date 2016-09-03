"use strict";
 
let numberToMemoryUnits = function(bytes){
	let units = ["kB", "MB", "GB", "TB", "PB"];
	let binaryDivisor = 1024;
	let numberOfBytesAsUnit = bytes;
	let unit = "B";
	while (numberOfBytesAsUnit >= binaryDivisor && units.length){
		numberOfBytesAsUnit /= binaryDivisor;
		unit = units.shift();
	}

	return Math.floor(numberOfBytesAsUnit) + unit;
}

module.exports = numberToMemoryUnits;