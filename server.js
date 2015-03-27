(function() {
  "use strict";
  /*jshint es5: true */

  var
    isDev = true,
    path = require('path'),
    bodyParser = require('body-parser'),
    express = require('express'),
    fs = require('fs'),
    isStatic = /(assets|images|partials|bower_components)/,
    app = express();

  for(var i = 0; i < process.argv.length; i++) {
    var arg = process.argv[i];
    if(arg === '--prod') {
      isDev = false;
      break
    }
  }

  var _index = 'prod-index.html';

  if(isDev) {
    _index = 'index.html';
  }

  app
    .set('port', 3000 )
    .use('/vendor', express.static(__dirname     +   '/src/vendor') )
    .use('/images', express.static(__dirname   +   '/public/images') )
    .use('/partials', express.static(__dirname +   '/src/js') )
    .use('/assets', express.static(__dirname   +   '/public') )
    .use( bodyParser.json() )
    .use( bodyParser.urlencoded( {extended: true} ) )
  ;

  require('./backend/endpoints')(app);

  app
    .get('*', function( request, response ) {

    if(isStatic.test(request.originalUrl) && !fs.existsSync(request.originalUrl)) {
      return response.status(404).send('Not Found');
    }

    return response.sendFile(
      _index, { root: __dirname }
    );
  });


  var
    serverPort = app.get('port'),
    server = app.listen(serverPort, function() {
      console.info('Esis.angular.course, '+( isDev ? 'DEVELOPMENT' : 'PRODUCTION')+' SERVER listening on port:',  serverPort);
    });


})();
