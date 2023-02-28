const EventEmitter = require('events');

const emitter = new EventEmitter();

// adding event listener

emitter.on('message logged',()=>console.log('listener called'));

// raising an event

emitter.emit('message logged')