#!/usr/bin/env node
"use strict";
var chalk, modules, pkg, result, sentence, woazar;

woazar = require("commander");

chalk = require("chalk");

pkg = require("../package.json");

modules = {
  hash: require("./modules/hash.js"),
  uuid: require("./modules/uuid.js"),
  timestamp: require("./modules/timestamp.js")
};

woazar.version(pkg.version).usage("[options] <sentence>").option(modules.hash.options, modules.hash.description).option(modules.uuid.options, modules.uuid.description).option(modules.timestamp.options, modules.timestamp.description);

woazar.parse(process.argv);

if (!!woazar.uuid) {
  result = modules.uuid.exec();
} else if (!!woazar.timestamp) {
  result = modules.timestamp.exec(woazar.args.join(" ").trim());
} else {
  if (!(sentence = woazar.args.join(" ").trim())) {
    console.log(chalk.bold.red("ERROR: "), "no sentence given !!!");
  }
  if (!!woazar.hash) {
    result = modules.hash.exec(woazar.hash, sentence);
  }
}

console.log(result);
