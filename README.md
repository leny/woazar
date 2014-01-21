# woazar

> Generate UUID/serials/hashes easily from the command line.

* * *

## Getting Started
Install the module with: `npm install woazar`

## Usage

**Woazar** is a small command line interface for generating fast hashes, timestamp or UUID, and copy the results to the clipboard.

```
woazar.js [options] <sentence>
```

### Options:

> -h, --help              output usage information

> -V, --version           output the version number

> -h, --hash <algorythm>  Return hashed <sentence> with selected <algorythm>.

>                         Supported algorythm are: 'md5', 'sha1', 'sha256', 'sha512' and 'whirlpool'.

> -u, --uuid              Return an UUID following the RFC 4122.

> -t, --timestamp         Return a the current timestamp.

> -r, --replace           Return a the current sentence, where the 'x' are replaced by random number, and the 'y'.

> -c, --copy              Copy the result to the clipboard.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

**2014/01/04:** project starting
**2014/01/21:** v0.1.0

## TODO

* Documenting code
* Unit tests

## License
Copyright (c) 2014 Leny  
Licensed under the MIT license.
