"use strict";

let assert = require("chai").assert;

let sumLongestContiguousSubsequence = require("./sumLongestContiguousSubsequence_terse.js");

describe("Test of puzzle requirement", function(){
	it("returns the highest contiguous subseries sum for baseline requirement", function(){
		let sequence = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
		let expectation = 4 + -1 + 2 + 1; // 6
		let result = sumLongestContiguousSubsequence(sequence);
		assert.equal(expectation, result);
	});
});

describe("Tests of other puzzle submission sequences", function(){
	it("returns the highest contiguous subseries sum for variation 1", function(){
		let sequence = [-2, 1, -3, 4, -1, 2, 1, -5, 4, 3];
		let expectation = 4 + -1 + 2 + 1 + -5 + 4 + 3; // 8
		let result = sumLongestContiguousSubsequence(sequence);
		assert.equal(expectation, result);
	});
	it("returns the highest contiguous subseries sum for variation 2", function(){
		let sequence = [-2, -1, -3, -5];
		let expectation = -1;
		let result = sumLongestContiguousSubsequence(sequence);
		assert.equal(expectation, result);
	});
	it("returns the highest contiguous subseries sum for variation 3", function(){
		let sequence = [1, 4, 2, 1, 4, 3];
		let expectation = 1 + 4 + 2 + 1 + 4 + 3; // 15
		let result = sumLongestContiguousSubsequence(sequence);
		assert.equal(expectation, result);
	});
});

describe("Test edge cases", function(){
	it("returns the highest contiguous subseries sum with an empty array", function(){
		let sequence = [];
		let expectation = null;
		let result = sumLongestContiguousSubsequence(sequence);
		assert.equal(expectation, result);
	});
	it("returns the highest contiguous subseries sum with just zero", function(){
		let sequence = [0];
		let expectation = 0;
		let result = sumLongestContiguousSubsequence(sequence);
		assert.equal(expectation, result);
	});
	it("returns the highest contiguous subseries sum with just -1", function(){
		let sequence = [-1];
		let expectation = -1;
		let result = sumLongestContiguousSubsequence(sequence);
		assert.equal(expectation, result);
	});
	it("returns the highest contiguous subseries sum with just 1", function(){
		let sequence = [1];
		let expectation = 1;
		let result = sumLongestContiguousSubsequence(sequence);
		assert.equal(expectation, result);
	});
});

describe("Better described tests", function(){
	it("returns the highest contiguous subseries sum when the sequence has negative values", function(){
		let sequence = [1,2,3,-11];
		let expectation = 1 + 2 + 3; // 6
		let result = sumLongestContiguousSubsequence(sequence);
		assert.equal(expectation, result);
	});
	it("returns the highest contiguous subseries sum when the sequence has negative values followed by a greater positive value", function(){
		let sequence = [1,2,3,-4,5];
		let expectation = 1 + 2 + 3 + -4 + 5; // 7
		let result = sumLongestContiguousSubsequence(sequence);
		assert.equal(expectation, result);
	});
	it("returns the highest contiguous subseries sum when the sequence has negative values followed by a subseries positive values that are net greater than the negative one", function(){
		let sequence = [2,4,6,-8,3,7];
		let expectation = 2 + 4 + 6 + -8 + 3 + 7; // 14
		let result = sumLongestContiguousSubsequence(sequence);
		assert.equal(expectation, result);
	});
	it("returns the highest contiguous subseries sum when the sequence has repeated negative values followed by a subseries positive values that are net greater than the negative one", function(){
		let sequence = [12,14,16,-8,3,7,-12,5,9];
		let expectation = 12 + 14 + 16 + -8 + 3 +7 + -12 + 5 + 9; // 46
		let result = sumLongestContiguousSubsequence(sequence);
		assert.equal(expectation, result);
	});
});