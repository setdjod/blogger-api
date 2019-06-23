/* eslint-disable no-undef */
require('dotenv').config();

var cors = require('cors');
var express = require('express');

var postsRouter = require('./routers/posts');
var pagesRouter = require('./routers/pages');
var labelRouter = require('./routers/label');

var app = express();

var env = process.env.NODE_ENV || 'development';

var whitelist = [
  'https://setdjod.github.io',
  'https://guitarchord.github.io'
];

var corsOptionsDelegate = function corsOptionsDelegate(req, callback) {
  var corsOptions = {};
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = {
      origin: true
    };
  } else {
    corsOptions = {
      origin: false
    };
  }
  callback(null, corsOptions);
};

if (env === 'development') {
  app.set('json spaces', 2);
}

app.use(cors(corsOptionsDelegate));

app.use('/posts', cors(corsOptionsDelegate), postsRouter);
app.use('/pages', cors(corsOptionsDelegate), pagesRouter);
app.use("/label", cors(corsOptionsDelegate), labelRouter);

// listen for requests :)
app.listen(process.env.PORT || 3000);
