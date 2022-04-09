'use strict';

var navigator = require('JZZ');

var midi;
var inputs;
var outputs;

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
 	var path = req.url.split("/");
	switch(path[1]) {
		case '':
      		res.statusCode = 200;
		  	res.setHeader('Content-Type', 'text/html');
			res.write('x');
      		res.end();
			break;
		case 'about':
      		res.statusCode = 200;
			res.setHeader('Content-Type', 'text/html');
			testOutputs();
			res.write('1\r\n');
			res.write(path[2]);
			res.end();
			break;
		case 'inputs':
      		res.statusCode = 200;
		  	res.setHeader('Content-Type', 'text/html');
		  	inputs.forEach(function(port){
    				res.write(port.name);
			});
			res.end();
			break;
		default:
			break;
	}

});


navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);
server.listen(port, hostname, () => {
  
  console.log(`Server running at http://${hostname}:${port}/`);
});


function onMIDIFailure(msg){
  console.log('Failed to get MIDI access - ' + msg);
  //process.exit(1);
}

function onMIDISuccess(midiAccess){
  midi = midiAccess;
  inputs = midi.inputs;
  outputs = midi.outputs;
  testOutputs();
  testInputs();
  //setTimeout(testOutputs, 500);
}

function testOutputs(){
  console.log('Testing MIDI-Out ports...');
  outputs.forEach(function(port){
    console.log('id:', port.id, 'manufacturer:', port.manufacturer, 'name:', port.name, 'version:', port.version);
    port.open();
    port.send([0x90, 60, 0x7f]);
  });  
}


function onMidiIn(ev){
//console.log(Buffer.from('Hello World!').toString('base64'));
//console.log(Buffer.from(b64Encoded, 'base64').toString());
  http.get('http://localhost:5000/teste/' + Buffer.from(ev.data).toString('base64'));
  console.log('MIDI:', ev.data);
}

function testInputs(){
  console.log('Testing MIDI-In ports...');
  inputs.forEach(function(port){
    console.log('id:', port.id, 'manufacturer:', port.manufacturer, 'name:', port.name, 'version:', port.version);
    port.onmidimessage = onMidiIn;
  });
}



