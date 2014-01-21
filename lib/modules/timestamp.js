"use strict";
exports.options = "-t, --timestamp";

exports.description = "Return a the current timestamp.";

exports.exec = function(given) {
  return (given ? new Date(given) : new Date()).getTime();
};
