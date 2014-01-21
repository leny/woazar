# Woazar

> Generate UUID/serials/hashes easily from the command line.

[https://github.com/Leny/woazar](https://github.com/Leny/woazar)
Copyright (c) 2014 Leny
Licensed under the MIT license.

* * *

## lib/modules/hash.js

> Hash module

* * *

    "use strict"

    crypto = require "crypto"

Exporting options & description (for *commander* help generation).

    exports.options = "-h, --hash <algorythm>"
    exports.description = "Return hashed <sentence> with selected <algorythm>.\nSupported algorythm are: 'md5', 'sha1', 'sha256', 'sha512' and 'whirlpool'."

    exports.exec = ( algo, sentence ) ->
        switch algo.toLowerCase()
            when "md5", "md-5" then algorythm = "md5"
            when "sha1", "sha-1" then algorythm = "sha1"
            when "sha256", "sha-256" then algorythm = "sha256"
            when "sha512", "sha-512" then algorythm = "sha512"
            when "whirlpool" then algorythm = "whirlpool"
        sum = crypto.createHash algorythm
        sum.update sentence, "utf8"
        sum.digest "hex"
