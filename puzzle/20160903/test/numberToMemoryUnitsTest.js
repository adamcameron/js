"use strict";

let assert = require("chai").assert;

let numberToMemoryUnits = require("../src/numberToMemoryUnits.js");

let binaryFactor = 1024;
let units = {
	kB : binaryFactor
};
units.MB = units.kB * binaryFactor;
units.GB = units.MB * binaryFactor;
units.TB = units.GB * binaryFactor;
units.PB = units.TB * binaryFactor;

describe("Tests for each unit", function(){
	it("should work for bytes", function(){
		let result = numberToMemoryUnits(123);
		let expectation = "123B";
		assert.equal(expectation, result);
	});
	it("should work for kB", function(){
		let result = numberToMemoryUnits(2345);
		let expectation = "2kB";
		assert.equal(expectation, result);
	});
	it("should work for MB", function(){
		let result = numberToMemoryUnits(3456789);
		let expectation = "3MB";
		assert.equal(expectation, result);
	});
	it("should work for GB", function(){
		let result = numberToMemoryUnits(4567890123);
		let expectation = "4GB";
		assert.equal(expectation, result);
	});
	it("should work for TB", function(){
		let result = numberToMemoryUnits(5678901234567);
		let expectation = "5TB";
		assert.equal(expectation, result);
	});
	it("should work for PB", function(){
		let result = numberToMemoryUnits(6789012345678901);
		let expectation = "6PB";
		assert.equal(expectation, result);
	});
	
});

describe("Test exact units", function(){
	it("should work for 1kB", function(){
		let result = numberToMemoryUnits(units.kB);
		let expectation = "1kB";
		assert.equal(expectation, result);
	});
	it("should work for 1MB", function(){
		let result = numberToMemoryUnits(units.MB);
		let expectation = "1MB";
		assert.equal(expectation, result);
	});
	it("should work for 1GB", function(){
		let result = numberToMemoryUnits(units.GB);
		let expectation = "1GB";
		assert.equal(expectation, result);
	});
	it("should work for 1TB", function(){
		let result = numberToMemoryUnits(units.TB);
		let expectation = "1TB";
		assert.equal(expectation, result);
	});
	it("should work for 1PB", function(){
		let result = numberToMemoryUnits(units.PB);
		let expectation = "1PB";
		assert.equal(expectation, result);
	});
});
describe("Test off by one", function(){
	it("should work for <1kB", function(){
		let result = numberToMemoryUnits(units.kB-1);
		let expectation = "1023B";
		assert.equal(expectation, result);
	});
	it("should work for >1kB", function(){
		let result = numberToMemoryUnits(units.kB+1);
		let expectation = "1kB";
		assert.equal(expectation, result);
	});
	it("should work for <1MB", function(){
		let result = numberToMemoryUnits(units.MB-1);
		let expectation = "1023kB";
		assert.equal(expectation, result);
	});
	it("should work for >1MB", function(){
		let result = numberToMemoryUnits(units.MB+1);
		let expectation = "1MB";
		assert.equal(expectation, result);
	});
	it("should work for <1GB", function(){
		let result = numberToMemoryUnits(units.GB-1);
		let expectation = "1023MB";
		assert.equal(expectation, result);
	});
	it("should work for >1GB", function(){
		let result = numberToMemoryUnits(units.GB+1);
		let expectation = "1GB";
		assert.equal(expectation, result);
	});
	it("should work for <1TB", function(){
		let result = numberToMemoryUnits(units.TB-1);
		let expectation = "1023GB";
		assert.equal(expectation, result);
	});
	it("should work for >1TB", function(){
		let result = numberToMemoryUnits(units.TB+1);
		let expectation = "1TB";
		assert.equal(expectation, result);
	});
	it("should work for <1PB", function(){
		let result = numberToMemoryUnits(units.PB-1);
		let expectation = "1023TB";
		assert.equal(expectation, result);
	});
	it("should work for >1PB", function(){
		let result = numberToMemoryUnits(units.PB+1);
		let expectation = "1PB";
		assert.equal(expectation, result);
	});
});

describe("Test boundaries", function(){
	it("should work for 0bytes", function(){
		let result = numberToMemoryUnits(0);
		let expectation = "0B";
		assert.equal(expectation, result);
	});
	it("should work for 1024PB", function(){
		let result = numberToMemoryUnits(units.PB*units.kB);
		let expectation = "1024PB";
		assert.equal(expectation, result);
	});
	it("should work for 1048576PB", function(){
		let result = numberToMemoryUnits(units.PB*units.MB);
		let expectation = "1048576PB";
		assert.equal(expectation, result);
	});
});
