"use strict";
var cyphers, letters;

exports.options = "-r, --replace";

exports.description = "Return a the current sentence, where the 'x' are replaced by random number, and the 'y'.";

letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

cyphers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

Array.prototype.random = function() {
  return this[~~(Math.random() * this.length)];
};

exports.exec = function(given) {
  return given.replace(/[xy]/g, function(letter) {
    return (letter === "y" ? letters : cyphers).random();
  });
};
