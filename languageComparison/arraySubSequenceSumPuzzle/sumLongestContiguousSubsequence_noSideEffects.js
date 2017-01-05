"use strict";

let sumLongestContiguousSubsequence = function (array) {
	let subSequences = array.map((_,i,a)=>a.slice(i));

	return subSequences.reduce(function(max, subsequence){
		let maximumSubSequence = subsequence.reduce(function(working, element){
			working.runningSum += element;
			working.max = working.max || working.runningSum;
			working.max = working.runningSum > working.max ? working.runningSum : working.max
			return {max:working.max, runningSum:working.runningSum};
		}, {runningSum:0});
		return Math.max(max||maximumSubSequence.max, maximumSubSequence.max);
	}, null);
};

module.exports = sumLongestContiguousSubsequence;
