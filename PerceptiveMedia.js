var bb = require('../bonescript');

restartPin = bone.P8_5;
ledPin = bone.USR3;

setup = function() {
    var server = new bb.Server(0, "PerceptiveMedia");
    pinMode(restartPin, INPUT);
    pinMode(ledPin, OUTPUT);
    /*attachInterrupt(restartPin, function(x) {
	console.log(' changed to ' + (x.value == HIGH));
        digitalWrite(ledPin, x.value);
    }, CHANGE);*/
    //attachInterrupt(restartPin, function(x) { digitalWrite(bone.USR3, x.value); return "fred"; }, 'both');
    server.begin();
};
