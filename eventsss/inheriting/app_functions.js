var EventEmitter = require('events');
var util = require('util');

function Greetr() {
	EventEmitter.call(this); // ~super(this)~ adds properties and methods which are added directly on any instance of EventEmitter, to the instance of Greetr
	this.greeting = 'Hello world!';
}

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function(data) {
	console.log(this.greeting + ': ' + data);
	this.emit('greet', data);
}

var greeter1 = new Greetr();

greeter1.on('greet', function(data) {
	console.log('Someone greeted!: ' + data);
});

greeter1.greet('Tony');