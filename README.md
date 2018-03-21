# egg-view-arttemplate

egg view plugin for [arttemplate].

## Install

```bash
$ npm i egg-view-arttemplate --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.arttemplate = {
  enable: true,
  package: 'egg-view-arttemplate',
};

// {app_root}/config/config.default.js
exports.view = {
  mapping: {
    '.html': 'arttemplate',
  },
};

// arttemplate config
exports.arttemplate = {
  escape: true,
  debug: false,
  bail: true,
  cache: true
};
```

Create a arttemplate file

```js
// app/view/hello.arttemplate
hello <%= data %>
```

Render it

```js
// app/controller/render.js
exports.arttemplate = async ctx => {
  await ctx.render('hello.html', {
    data: 'world',
  });
};
```

### Layout

You can render a view with layout also:

```js
// app/view/layout.html
{{each target}}
    {{$index}} {{$value}}
{{/each}}

// app/controller/render.js
exports.arttemplate = async ctx => {
  const locals = {
    data: 'world',
    target: [1, 2, 3]
  };

  const viewOptions = {
    cache: false
  };

  await ctx.render('hello.html', locals);
};
```

## Configuration

see [config/config.default.js](config/config.default.js) for more detail.

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)

[arttemplate]: https://github.com/jamesliauw/egg-view-arttemplate
