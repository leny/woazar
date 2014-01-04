#!/usr/bin/env node
"use strict";
var chalk, modules, pkg, sentence, woazar;

woazar = require("commander");

chalk = require("chalk");

pkg = require("../package.json");

modules = {
  hash: require("./modules/hash.js")
};

woazar.version(pkg.version).usage("[options] <sentence>").option(modules.hash.options, modules.hash.description);

woazar.parse(process.argv);

sentence = woazar.args.join(" ").trim();

if (!sentence) {
  console.log(chalk.bold.red("ERROR: "), "no sentence given !!!");
}
