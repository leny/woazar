# Woazar

> Generate UUID/serials/hashes easily from the command line.

[https://github.com/Leny/woazar](https://github.com/Leny/woazar)
Copyright (c) 2014 Leny
Licensed under the MIT license.

* * *

## lib/modules/timestamp.js

> Timestamp module

* * *

    "use strict"

Exporting options & description (for *commander* help generation).

    exports.options = "-t, --timestamp"
    exports.description = "Return a the current timestamp."

    exports.exec = ( given ) ->
        ( if given then new Date( given ) else new Date() ).getTime()
