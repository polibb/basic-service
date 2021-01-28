var util = require('util');

// class Person {
// 	constructor(firstname, lastname) {
// 		this.firstname = firstname;
// 		this.lastname = lastname;
// 	}

// 	greet() {
// 		console.log('Hello ' + this.firstname + ' ' + this.lastname);
// 	}
// }

// same as above
function Person(firstname, lastname) {
	this.firstname = firstname;
	this.lastname = lastname;
}

Person.prototype.greet = function() {
	console.log('Hello ' + this.firstname + ' ' + this.lastname);
}
// until here

// check class construction with:
var john = new Person('john', 'hugh');
john.greet();

var john2 = new Person('john2', 'hugh2');
john2.greet();

// INHERIT and call super for inner props assign :)
// function Policeman(firstname, lastname) {
// 	Person.call(this, firstname, lastname);
// 	this.badgenumber = '1234';
// }

// util.inherits(Policeman, Person);
// var officer = new Policeman('John', 'Doe');
// officer.greet();