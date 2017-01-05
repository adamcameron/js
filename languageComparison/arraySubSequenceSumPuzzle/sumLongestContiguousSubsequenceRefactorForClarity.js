"use strict";

let sumLongestContiguousSubsequence = function (array) {
	let runningSum;
	
	let getCurrentMaxSum = function(max, element){
		return (runningSum += element) > max ? runningSum : max;
	};
	
	let findSumOfLongestSub = function(max, subsequence){
		runningSum = subsequence[0];
		let maximumSubSequenceSum = subsequence.reduce(getCurrentMaxSum);
		return Math.max(max||maximumSubSequenceSum, maximumSubSequenceSum);
	};

	let subSequencesSlicedAtEachIndex = array.map((_,i,a)=>a.slice(i));

	return subSequencesSlicedAtEachIndex.reduce(findSumOfLongestSub, null);
};

module.exports = sumLongestContiguousSubsequence;
