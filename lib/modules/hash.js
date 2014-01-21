"use strict";
var crypto;

crypto = require("crypto");

exports.options = "-h, --hash <algorythm>";

exports.description = "Return hashed <sentence> with selected <algorythm>.\nSupported algorythm are: 'md5', 'sha1', 'sha256', 'sha512' and 'whirlpool'.";

exports.exec = function(algo, sentence) {
  var algorythm, sum;
  switch (algo.toLowerCase()) {
    case "md5":
    case "md-5":
      algorythm = "md5";
      break;
    case "sha1":
    case "sha-1":
      algorythm = "sha1";
      break;
    case "sha256":
    case "sha-256":
      algorythm = "sha256";
      break;
    case "sha512":
    case "sha-512":
      algorythm = "sha512";
      break;
    case "whirlpool":
      algorythm = "whirlpool";
  }
  sum = crypto.createHash(algorythm);
  sum.update(sentence, "utf8");
  return sum.digest("hex");
};
