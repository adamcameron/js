"use strict";

var assert = require('chai').assert;

describe("Person tests", function () {

	var Person = require("../src/Person");

	it("returns correct full name", function () {
		var testFirstName = "TEST_FIRST_NAME";
		var testLastName = "TEST_LAST_NAME";
		var person = new Person(testFirstName, testLastName);

		var fullName = person.getFullName();

		assert.equal(fullName, testFirstName + " " + testLastName);
	});

	it("returns correct age in years", function () {
		var expectedAge = 5;
		var testDob = new Date();
		testDob.setYear(testDob.getFullYear() - expectedAge);
		var person = new Person("_", "_", testDob);

		var ageInYears = person.getAgeInYears();

		assert.equal(ageInYears, expectedAge);
	});
});
