	let numbers = [
		{mi: "tahi", en: "one"} ,
		{mi: "rua", en: "two"},
		{mi: "toru", en: "three"},
		{mi: "wha", en: "four"},
		{mi: "rima", en: "five"},
		{mi: "ono", en: "six"},
		{mi: "whitu", en: "seven"},
		{mi: "waru", en: "eight"},
		{mi: "iwa", en: "nine"},
		{mi: "tekau", en: "ten"},
		{mi: "tekau ma tahi", en: "eleven"} ,
		{mi: "tekau ma rua", en: "twelve"},
		{mi: "tekau ma toru", en: "thirteen"},
		{mi: "tekau ma wha", en: "fourteen"},
		{mi: "tekau ma rima", en: "fifteen"},
		{mi: "tekau ma ono", en: "sixteen"},
		{mi: "tekau ma whitu", en: "seventeen"},
		{mi: "tekau ma waru", en: "eighteen"},
		{mi: "tekau ma iwa", en: "nineteen"},
		{mi: "rua tekau", en: "twenty"}
	];
	
	let populateNumbersUsingForEach = function(){
		let numbersList = $("#numbersUsingForEach");
		let numbersElements = new DocumentFragment();
		console.time("Using foreach");
		numbers.forEach(function(number){
			let numberItem = document.createElement("li");
			numberItem.innerHTML = `${number.mi} (${number.en})`;		
			numbersElements.appendChild(numberItem);
		});
		console.timeEnd("Using foreach");
		
		numbersList.append(numbersElements);
	};
	
	let populateNumbersUsingForOf = function(){
		let numbersList = $("#numbersUsingForOf");
		let numbersElements = new DocumentFragment();
		console.time("Using for...of");
		for (var number of numbers){
			let numberItem = document.createElement("li");
			numberItem.innerHTML = `${number.mi} (${number.en})`;		
			numbersElements.appendChild(numberItem);
		}
		console.timeEnd("Using for...of");
		
		numbersList.append(numbersElements);
	};
	
	let populateNumbersUsingFor = function(){
		let numbersList = $("#numbersUsingFor");
		let numbersElements = new DocumentFragment();
		console.time("Using for");
		let number;
		let numberItem;
		for (var i=0; i < numbers.length;i++){
			number = numbers[i];
			numberItem = document.createElement("li");
			numberItem.innerHTML = `${number.mi} (${number.en})`;		
			numbersElements.appendChild(numberItem);
		}
		console.timeEnd("Using for");
		
		numbersList.append(numbersElements);
	};
	
$("document").ready(function(){
	populateNumbersUsingForEach();
	populateNumbersUsingForOf();
	populateNumbersUsingFor();
});