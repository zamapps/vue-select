const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const generator = require('./generator');

/**
 * Get all of the component mixin paths.
 * @param directory
 * @return {string[]}
 */
function getMixins (directory) {
  return fs.readdirSync(directory)
    .filter(file => file !== 'index.js')
    .map(file => path.resolve(directory, file));
}

/**
 * @param options
 * @param sourceDir
 * @return {{clientDynamicModules(): Promise<{name: string, content: string}>}}
 */
module.exports = (options, {sourceDir}) => ({

  /**
   * Dynamically generates all API documentation with vue-docgen-api.
   * Resulting object can be imported and used client-side via:
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

});
