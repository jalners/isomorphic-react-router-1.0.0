require('node-jsx-babel').install({extension: '.jsx'});

var _ = require('lodash');
var express = require('express');
var http = require('http');
var fs = require('fs');
var path = require('path');
var React = require('react');
var Router = require('react-router');
var RoutingContext = Router.RoutingContext;
var match = Router.match;
var createLocation = require('react-router/node_modules/history/lib/createLocation');
var routes = require('./src/js/routes.jsx');

var template = fs.readFileSync(path.join('./public/views/index.html'), 'utf8');

var app = express();
var port = process.env.PORT || 8080;

app.use('/', express.static(__dirname + '/public/'));

app.get('*', function(req, res) {
  var location = createLocation(req.url);

  match({ routes: routes, location: location }, function(error, redirectLocation, renderProps) {
    var data = {
      application: React.renderToString(React.createElement(RoutingContext, renderProps))
    };
    var html = _.template(template)(data);
    res.send(html);
  });
});

var server = http.createServer(app).listen(port, function() {
  console.log('Express server listening on port ' + port);
});
