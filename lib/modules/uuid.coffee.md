# Woazar

> Generate UUID/serials/hashes easily from the command line.

[https://github.com/Leny/woazar](https://github.com/Leny/woazar)
Copyright (c) 2014 Leny
Licensed under the MIT license.

* * *

## lib/modules/uuid.js

> UUID module

* * *

    "use strict"

Exporting options & description (for *commander* help generation).

    exports.options = "-u, --uuid"
    exports.description = "Return an UUID following the RFC 4122."

    exports.exec = ->
        'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace /[xy]/g, (c) ->
            r = Math.random() * 16 | 0
            v = if c is 'x' then r else ( r & 0x3|0x8 )
            v.toString 16
