"use strict";

let sumLongestContiguousSubsequence = function (array) {
	let subSequences = array.map((_,i,a)=>a.slice(i));

	return subSequences.reduce(function(max, subsequence){
		let runningSum = subsequence[0];
		let maximumSubSequenceSum = subsequence.reduce(function(max, element){
			return (runningSum += element) > max ? runningSum : max;
		});
		return Math.max(max||maximumSubSequenceSum, maximumSubSequenceSum);
	}, null);
};

module.exports = sumLongestContiguousSubsequence;
