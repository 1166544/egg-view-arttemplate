'use strict';

module.exports = app => {
  app.view.use('arttemplate', require('./lib/view'));
};
