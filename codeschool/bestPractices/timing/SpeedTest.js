function SpeedTest (testImplement, testParams, repetitions){
	this.testImplement = testImplement;
	this.testParams = testParams;
	this.repetitions = repetitions || 10000;
	this.average = 0;
}

SpeedTest.prototype = {
	startTest : function(){
		let beginTime, endTime, sumTimes=0;
		for (var i=0, x = this.repetitions; i < x; i++) {
			beginTime = +new Date();
			this.testImplement(this.testParams);
			endTime = +new Date();
			sumTimes += endTime - beginTime;
		}
		this.average = sumTimes / this.repetitions;
		return console.log(`Average execution across ${this.repetitions}: ${this.average}`);
	}
};

function Knight(name){
	this.name = name;
}

let firstRegimentKnights = [...Array(10000).keys()].map(function(i){
	return new Knight(`Knight ${i}`);
});

let firstRegimentNewbs = ["first", "second","third","fourth"];

let listsForTests = [firstRegimentNewbs,firstRegimentKnights];

let noBP = function(listOfParams){
	listOfParams[0].forEach(function(name){
		let newGuy = new Knight(name);
		listOfParams[1].push(newGuy);
	});
};

let noBPTest = new SpeedTest(noBP, listsForTests);
noBPTest.startTest();


noBPTest = new SpeedTest(noBP, listsForTests, 100000);
noBPTest.startTest();