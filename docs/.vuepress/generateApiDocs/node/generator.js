const path = require('path');
const bt = require('@babel/types');
const docs = require('vue-docgen-api');
const {NodePath} = require('ast-types');
const {Documentation, ParseOptions, ComponentDoc} = require('vue-docgen-api');
const additionalSlotProperties = require('./getAdditionalSlotProperties');

/**
 * Generate an object of API documentation.
 * @param documentationRootDir
 * @return {Promise<ComponentDoc>}
 */
module.exports = async (documentationRootDir) => {

  const file = path.resolve(
    documentationRootDir,
    '../src/components/Select.vue',
  );

  const documentation = await docs.parse(file, {
    jsx: false,
    addScriptHandlers: [
      /**
       * @param {Documentation} docs
       * @param {NodePath} path
       * @param {bt.File} astPath
       * @param {ParseOptions} options
       * @return {Promise<void>}
       */
      function (docs, path, astPath, options) {

      },
    ],
    addTemplateHandlers: [
      /**
       * @param {Documentation} docs
       * @param {ASTElement} templateAst
       * @param {TemplateParserOptions} options
       */
      function (docs, templateAst, options) {
      },
    ],
  });

  const definitions = additionalSlotProperties(file);

  documentation.slots = documentation.slots.map(slot => ({ ...slot, ...definitions[slot.name] }));

  return documentation;
};
