# Woazar

> Generate UUID/serials/hashes easily from the command line.

[https://github.com/Leny/woazar](https://github.com/Leny/woazar)
Copyright (c) 2014 Leny
Licensed under the MIT license.

* * *

## lib/modules/replace.js

> Replace module

* * *

    "use strict"

Exporting options & description (for *commander* help generation).

    exports.options = "-r, --replace"
    exports.description = "Return a the current sentence, where the 'x' are replaced by random number, and the 'y'."

    letters = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ]
    cyphers = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ]

    Array.prototype.random = ->
        this[ ~~( Math.random() * this.length ) ]

    exports.exec = ( given ) ->
        given.replace /[xy]/g, ( letter ) ->
            ( if letter is "y" then letters else cyphers ).random()


