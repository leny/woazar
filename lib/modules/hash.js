"use strict";
exports.options = "-h, --hash <algorythm>";

exports.description = "Return hashed <sentence> with selected <algorythm>.\nSupported algorythm are: 'md5', 'sha1', 'sha256', 'sha512' and 'whirlpool'.";

exports.exec = function() {
  return console.log("[hash] do something with these: ", arguments);
};
