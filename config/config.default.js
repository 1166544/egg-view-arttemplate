'use strict';
const path = require('path');

module.exports = appInfo => {
  const config = {};
  /**
     * @member Config#arttemplate
     * @property {String} [root=${baseDir}/app/view] - the root directory of arttemplate files
     * @property {Boolean} [cache=true] - compiled functions are cached, only work using `ctx.render`
     * @property {Boolean} [debug=false] - output generated function body
     * @property {Boolean} [compileDebug=true] - when false no debug instrumentation is compiled
     * @property {String} [delimiter] - character to use with angle brackets for open/close
     * @property {Boolean} [strict=false] - when set to true, generated function is in strict mode
     */
  config.arttemplate = {
    // 模板名
    filename: null,

    // 是否开启对模板输出语句自动编码功能。为 false 则关闭编码输出功能
    // escape 可以防范 XSS 攻击
    escape: true,

    // 启动模板引擎调试模式。如果为 true: {cache:false, minimize:false, compileDebug:true}
    debug: false,

    // bail 如果为 true，编译错误与运行时错误都会抛出异常
    bail: true,

    // 是否开启缓存
    cache: true,

    // 是否开启压缩。它会运行 htmlMinifier，将页面 HTML、CSS、CSS 进行压缩输出
    // 如果模板包含没有闭合的 HTML 标签，请不要打开 minimize，否则可能被 htmlMinifier 修复或过滤
    minimize: true,

    // 是否编译调试版
    compileDebug: false,

    // 模板根目录。如果 filename 字段不是本地路径，则在 root 查找模板
    root: path.join(appInfo.baseDir, 'app/view'),

    // 默认后缀名。如果没有后缀名，则会自动添加 extname
    extname: '.html',

    // 忽略的变量。被模板编译器忽略的模板变量列表
    ignore: [],
  };

  return config;
};
