var Greetr = require('./greetr');

var greeter1 = new Greetr();

// when event is emitted, thanks to EvenEmitter
greeter1.on('greet', function(data) {
	console.log('Someone greeted!: ' + data);
});

// emit the event
greeter1.greet('Tony');