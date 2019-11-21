const path = require('path');
const chalk = require('chalk');
const generator = require('./generator');
const extendPageData = require('./extendPageData');

/**
 * @param options
 * @param sourceDir
 * @return {{clientDynamicModules(): Promise<{name: string, content: string}>}}
 */
module.exports = (options, {sourceDir}) => ({
  name: 'vuepress-docgen',

  /**
   * Dynamically generates all API documentation with vue-docgen-api.
   * The resulting object can be imported and used client-side via:
   *
   * import documentation from '@dynamic/api'
   *
   * @see https://vuepress.vuejs.org/plugin/option-api.html#clientdynamicmodules
   * @return {Promise<{name: string, content: string}>}
   */
  async clientDynamicModules () {
    const docs = await generator(sourceDir);
    console.log(chalk.green('✅ Generated API documentation for Select.vue'));
    return {
      name: 'api.js',
      content: `export default ${JSON.stringify(docs)}`,
    };
  },

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
