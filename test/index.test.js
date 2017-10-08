/* eslint prefer-rest-params: off */

'use strict';

var reconnected = require( '../src/index' )
var db = require( './fixture/db' )
var sinon = require( 'sinon' )
var spy = sinon.spy( console, 'log' )
var tap = require( 'tap' )

tap.test( 'reconnectedEvent without debug output',
  function ( t ) {
    var reconnectedEvent

    db.base.options.debug = false
    reconnectedEvent = reconnected.bind( db )
    reconnectedEvent()

    t.same( spy.notCalled, true, 'should not output a console.log message' )
    t.end()
  }
)

tap.test( 'reconnectedEvent with debug output',
  function ( t ) {
    var reconnectedEvent

    db.base.options.debug = true
    reconnectedEvent = reconnected.bind( db )
    reconnectedEvent()

    t.same(
      spy.calledWith(
        '[debug]',
        spy.getCall( 0 ).args[ 1 ],
        'reconnected to mongodb://localhost:27017/mydb'
      ),
      true,
      'should output a console.log message'
    )

    t.end()
  }
)

tap.test( 'reconnectedEvent with custom logger',
  function ( t ) {
    var reconnectedEvent

    var logger = {
      log: function () {
        var args = Array.from( arguments );

        console.log( args.join( ' ' ) )
      }
    }

    db.base.options.debug = true
    reconnectedEvent = reconnected.bind( db, logger )
    reconnectedEvent()

    t.same(
      spy.calledWith(
        '[debug]',
        spy.getCall( 0 ).args[ 1 ],
        'reconnected to mongodb://localhost:27017/mydb'
      ),
      true,
      'should output a console.log message using a custom logger'
    )

    t.end()
  }
)
