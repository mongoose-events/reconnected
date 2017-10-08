# mongoose-events-reconnected
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![NSP Status][nsp-image]][nsp-url]

a mongoose event handler that handles the reconnected event

## table of contents
* [installation](#installation)
* [usage](#usage)
    * [basic](#basic)
    * [with a logging service](#with-a-logging-service)
* [license](#license)

## installation
```javascript
npm install mongoose-events-reconnected
```

## usage
### basic
```javascript
var reconnectedEvent = require( 'mongoose-events-reconnected' )
var db

db = mongoose.connection
db.on( 'reconnected', reconnectedEvent.bind( db ) )
```

### with a logging service
```javascript
var reconnectedEvent = require( 'mongoose-events-reconnected' )
var db

// logging service needs to have a .log( arg1[, arg2[, ...] ] ) method
var logger = require( 'your-logger' )

db = mongoose.connection
db.on( 'reconnected', reconnectedEvent.bind( db, logger ) )
```

## license
[MIT License][mit-license]

[coveralls-image]: https://coveralls.io/repos/github/mongoose-events/reconnected/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/mongoose-events/reconnected?branch=master
[mit-license]: https://raw.githubusercontent.com/mongoose-events/reconnected/master/license.txt
[npm-image]: https://img.shields.io/npm/v/mongoose-events-reconnected.svg
[npm-url]: https://www.npmjs.com/package/mongoose-events-reconnected
[nsp-image]: https://nodesecurity.io/orgs/mongoose-events/projects/2b261b35-a299-4c28-b104-80e72164c7b2/badge
[nsp-url]: https://nodesecurity.io/orgs/mongoose-events/projects/2b261b35-a299-4c28-b104-80e72164c7b2
[travis-image]: https://travis-ci.org/mongoose-events/reconnected.svg?branch=master
[travis-url]: https://travis-ci.org/mongoose-events/reconnected
