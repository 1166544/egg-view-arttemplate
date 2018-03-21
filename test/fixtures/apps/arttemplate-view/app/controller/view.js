'use strict';

exports.renderWithLocals = function* (ctx) {
  yield ctx.render('locals.html', {
    data: 'world',
  });
};

exports.include = function* (ctx) {
  yield ctx.render('include/index.html');
};

exports.renderWithHelper = function* (ctx) {
  yield ctx.render('helper.html');
};

exports.cache = function* (ctx) {
  yield ctx.render('cache.html');
};

exports.htmlext = function* (ctx) {
  yield ctx.render('arttemplate.html');
};

exports.error = function* (ctx) {
  try {
    yield ctx.render('error.html');
  } catch (err) {
    this.body = err.message;
  }
};

exports.renderStringWithData = function* (ctx) {
  ctx.body = yield ctx.renderString('hello <%= data %>', {
    data: 'world',
  });
};

exports.renderStringWithHelper = function* (ctx) {
  ctx.body = yield ctx.renderString('hello <%= helper.data() %>');
};

exports.renderStringError = function* (ctx) {
  try {
    yield ctx.renderString('<% a');
  } catch (err) {
    ctx.body = err.message;
  }
};

exports.renderWithLayout = function* (ctx) {
  yield ctx.render('arttemplate.html', {}, {
    layout: 'layout.html',
  });
};
