'use strict';

const fs = require('fs');
const arttemplate = require('art-template');

module.exports = class arttemplateView {

  constructor(ctx) {
    this.ctx = ctx;
    this.app = ctx.app;
    this.config = ctx.app.config.arttemplate;
  }

  * render(filename, locals, viewOptions) {

    const config = Object.assign({}, this.config, viewOptions, {
      filename,
    });

    return new Promise((resolve, reject) => {
      let fileData = null;

      if (config.cache) {
        fileData = this.app.getTemplateCache(filename);
      }

      if (fileData) {

        // use cache
        // console.log('use cache....');
        const html = arttemplate.render(fileData, locals, config);
        locals.body = html;
        resolve(html);

      } else {

        // use read file render
        const dataContent = fs.readFileSync(filename, 'utf-8');

        if (!dataContent) {
          reject(dataContent);
        }

        // console.log('use normal template....');
        const html = arttemplate.render(dataContent, locals, config);
        this.app.setTemplateCache(filename, dataContent);
        locals.body = html;
        resolve(html);
      }
    });

  }

  * renderView(filename, locals, viewOptions) {
    const config = Object.assign({}, this.config, viewOptions, {
      filename,
    });

    return new Promise((resolve, reject) => {
      let fileData = null;

      if (config.cache) {
        fileData = this.app.getTemplateCache(filename);
      }

      if (fileData) {

        // use cache
        const html = arttemplate.render(fileData, locals, config);
        resolve(html);
      } else {

        // use read file render
        const dataContent = fs.readFileSync(filename, 'utf-8');

        if (dataContent) {
          reject(dataContent);
        }

        const html = arttemplate.render(dataContent, locals, config);
        this.app.setTemplateCache(filename, dataContent);
        resolve(html);
      }
    });
  }

  renderString(tpl, locals, viewOptions) {
    // should disable cache when no filename
    const config = Object.assign({}, this.config, viewOptions, {
      cache: null,
    });
    try {
      return Promise.resolve(arttemplate.render(tpl, locals, config));
    } catch (err) {
      return Promise.reject(err);
    }
  }

};
