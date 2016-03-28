'use strict';

const five = require('johnny-five');
const board = new five.Board();

board.on('ready', function () {

  board.pinMode(13,board.MODES.OUTPUT);

  board.loop(1000, function () {
    board.digitalWrite(13,board.pins[13].value ? 0 : 1);
  });
});
