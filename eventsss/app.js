// var Emitter = require('./emitter');
var Emitter = require('events');
var eventConfig = require('./config').events;

var emtr = new Emitter();

emtr.on(eventConfig.GREET, function() {
    console.log('On Hello we greet')
});

emtr.on(eventConfig.GREET, function() {
    console.log('A listener one more here we have')
});

console.log('started');
emtr.emit('greet')