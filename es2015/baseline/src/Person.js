"use strict";

class Person {

	constructor(firstName, lastName, dob){
		this.firstName = firstName;
		this.lastName = lastName;
		this.dob = dob;
		this.fullName = `${this.firstName} ${this.lastName}`;
	}
	
	getFullName(){
		return this.fullName;
	}
	
	getAgeInYears(){
		return new Date().getFullYear() - this.dob.getFullYear();
	}

}

module.exports = Person;
