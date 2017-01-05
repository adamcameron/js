<cfscript>
// NB: Lucee5 only
sumLongestContiguousSubsequence = function (array) {
	var subSequences = array.map((_,i,a) => a.slice(i));
	return subSequences.reduce(function(maxSum, subSequence){
		var runningSum = 0;
		var maximumSubSequenceSum = subSequence.reduce(
		    (maxSum, element) => (runningSum += element) > maxSum ? runningSum : maxSum,
		    subSequence[1]
	    );
		return max(maxSum ?: maximumSubSequenceSum, maximumSubSequenceSum);
	}, null);
};
writeDump(var=sumLongestContiguousSubsequence([]), format="text"); // null
writeDump(var=sumLongestContiguousSubsequence([0]), format="text"); // 0
writeDump(var=sumLongestContiguousSubsequence([1]), format="text"); // 1
writeDump(var=sumLongestContiguousSubsequence([-1]), format="text"); // -1
writeDump(var=sumLongestContiguousSubsequence([-2,1,-3,4,-1,2,1,-5,4]), format="text"); // 4,1,-1,2 = 6
writeDump(var=sumLongestContiguousSubsequence([-2,1,-3,4,-1,2,1,-5,4,3]), format="text"); //4,-1,2,1,-5,4,3 = 8
writeDump(var=sumLongestContiguousSubsequence([-2,-3,-1,-5]), format="text"); // -1
writeDump(var=sumLongestContiguousSubsequence([1,4,2,1,4,3]), format="text"); // all = 15
</cfscript>