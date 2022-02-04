const express = require('express');
const app = require('../app')
const morgan = require('morgan');
const expressSession = require('express-session');
const hbs = require('hbs');
// const FileStore = require('session-file-store')(expressSession);
const cookieParser = require('cookie-parser');
const sessionsConfig = require('./sessionsConfig');
// const { clearCookie } = require('../middleware/auth');

const config = (app) => {
// USE
  app.use(morgan('dev'));
  app.use(cookieParser());
  app.use(express.static('public'));
  app.use(expressSession(sessionsConfig));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  // app.use(clearCookie);

  // SET
  app.set('view engine', 'hbs');
  hbs.registerPartials(`${__dirname}/../views/partials`);
};

module.exports = config;
