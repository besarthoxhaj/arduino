'use strict';

const five = require('johnny-five');
const board = new five.Board();

board.on('ready', function () {

  board.pinMode(13,board.MODES.OUTPUT);

  board.analogRead(1, function (voltage) {

    if (voltage > 300) {
      board.digitalWrite(13,1);
    } else {
      board.digitalWrite(13,0);
    }
  });
});
