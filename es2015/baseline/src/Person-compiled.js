"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
	function Person(firstName, lastName, dob) {
		_classCallCheck(this, Person);

		this.firstName = firstName;
		this.lastName = lastName;
		this.dob = dob;
		this.fullName = this.firstName + " " + this.lastName;
	}

	_createClass(Person, [{
		key: "getFullName",
		value: function getFullName() {
			return this.fullName;
		}
	}, {
		key: "getAgeInYears",
		value: function getAgeInYears() {
			return new Date().getFullYear() - this.dob.getFullYear();
		}
	}]);

	return Person;
}();

module.exports = Person;
