'use strict';

const TEMPLATE_CACHE = Symbol('Application#templateCache');

module.exports = {

  getTemplateCache(key) {
    if (!this[TEMPLATE_CACHE]) {
      this[TEMPLATE_CACHE] = {};
    }

    return this[TEMPLATE_CACHE][key] || null;
  },

  setTemplateCache(key, value) {
    const cacheDataList = this[TEMPLATE_CACHE];

    cacheDataList[key] = value;
  },

};
