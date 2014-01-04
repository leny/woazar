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

Exporting options & description (for *commander* help generation).

    exports.options = "-h, --hash <algorythm>"
    exports.description = "Return hashed <sentence> with selected <algorythm>.\nSupported algorythm are: 'md5', 'sha1', 'sha256', 'sha512' and 'whirlpool'."

    exports.exec = ->
        console.log "[hash] do something with these: ", arguments
