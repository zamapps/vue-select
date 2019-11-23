const path = require('path');
const extendPageData = require('./extendPageData');
const clientDynamicModules = require('./clientDynamicModules');

/**
 * @param options
 * @param sourceDir
 * @return {{clientDynamicModules(): Promise<{name: string, content: string}>}}
 */
module.exports = (options, {sourceDir}) => ({
  name: 'vuepress-docgen',

  /**
   * Generates API documentation for use on the client side.
   *
   * @see https://vuepress.vuejs.org/plugin/option-api.html#clientdynamicmodules
   * @return {Promise<{name: string, content: string}>}
   */
  clientDynamicModules: async () => await clientDynamicModules(sourceDir),

  /**
   * @see https://vuepress.vuejs.org/plugin/option-api.html#enhanceappfiles
   */
  enhanceAppFiles: path.resolve(__dirname, 'enhanceApp.js'),

  /**
   * This function is responsible for adding documentation headers
   * to the `headers Array` of each API page. These headers are
   * then picked up by the search API, and displayed in the sidebar.
   *
   * @see https://vuepress.vuejs.org/plugin/option-api.html#extendpagedata
   */
  extendPageData,
});
