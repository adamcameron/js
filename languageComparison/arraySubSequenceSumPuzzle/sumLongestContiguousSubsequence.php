<?php

$sumLongestContiguousSubsequence = function ($array) {
	$subSequences = array_map(function($i) use ($array) {
		return array_slice($array, $i);
	}, array_keys($array));

	return array_reduce($subSequences, function($max, $subSequence){
		$runningSum = 0;
		$maximumSubSequenceSum = array_reduce($subSequence, function($max, $element) use (&$runningSum){
			return ($runningSum += $element) > $max ? $runningSum : $max;
		}, $subSequence[0]);
		return max($max?:$maximumSubSequenceSum, $maximumSubSequenceSum);
	}, null);
};
var_dump($sumLongestContiguousSubsequence([])); // null
var_dump($sumLongestContiguousSubsequence([0])); // 0
var_dump($sumLongestContiguousSubsequence([1])); // 1
var_dump($sumLongestContiguousSubsequence([-1])); // -1
var_dump($sumLongestContiguousSubsequence([-2,1,-3,4,-1,2,1,-5,4])); // 4,1,-1,2 = 6
var_dump($sumLongestContiguousSubsequence([-2,1,-3,4,-1,2,1,-5,4,3])); //4,-1,2,1,-5,4,3 = 8
var_dump($sumLongestContiguousSubsequence([-2,-3,-1,-5])); // -1
var_dump($sumLongestContiguousSubsequence([1,4,2,1,4,3])); // all = 15