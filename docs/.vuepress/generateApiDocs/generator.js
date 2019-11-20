const docs = require('vue-docgen-api');
const path = require('path');
// const getMemberFilter = require('vue-docgen-api/dist/utils/getMemberFilter.js');
const getMemberFilter = require('vue-docgen-api/dist/utils/getPropsFilter');
const bt = require('@babel/types');
const {NodePath} = require('ast-types');
const {Documentation, ParseOptions, ComponentDoc} = require('vue-docgen-api');

/**
 * Generate an object of API documentation.
 * @param documentationRootDir
 * @return {Promise<ComponentDoc>}
 */
module.exports = async (documentationRootDir) => {
  const file = path.resolve(documentationRootDir,
    '../src/components/Select.vue');
  return await docs.parse(file, {
    jsx: false,
    // addScriptHandlers: [
    //   /**
    //    * @param {Documentation} docs
    //    * @param {NodePath} path
    //    * @param {bt.File} astPath
    //    * @param {ParseOptions} options
    //    * @return {Promise<void>}
    //    */
    //   function (docs, path, astPath, options) {
    //     if (bt.isObjectExpression(path.node)) {
    //       const propsPath = path
    //         .get('properties')
    //         .filter(nodePath => bt.isObjectProperty(nodePath.node) &&
    //           getMemberFilter('props')(nodePath));
    //
    //
    //     }
    //   },
    // ],
  });
};
