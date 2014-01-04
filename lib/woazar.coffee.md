# Woazar

> Generate UUID/serials/hashes easily from the command line.

[https://github.com/Leny/woazar](https://github.com/Leny/woazar)
Copyright (c) 2014 Leny
Licensed under the MIT license.

* * *

## lib/woazar.js

> Main entry point

* * *

    "use strict"

We use the [commander](https://npmjs.org/package/commander) & [chalk](https://npmjs.org/package/chalk) packages.

    woazar = require "commander"
    chalk = require "chalk"

Load `package.json` and *woazar* modules.

    pkg = require "../package.json"

    modules =
        hash: require "./modules/hash.js"

Define program commands (using commander's API).

    woazar
        .version( pkg.version )
        .usage( "[options] <sentence>" )
        .option( modules.hash.options, modules.hash.description )

    woazar.parse process.argv

Redirect the arguments to specified modules.

    sentence = woazar.args.join( " " ).trim()

    if not sentence
        console.log chalk.bold.red( "ERROR: " ), "no sentence given !!!"

> TODO : follow the specs : http://files.flatland.be/fFHu
