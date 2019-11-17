const docs = require('vue-docgen-api');
const path = require('path');

/**
 * Generate an object of API documentation.
 * @param documentationRootDir
 * @return {Promise<ComponentDoc>}
 */
module.exports = async (documentationRootDir) => {
  const file = path.resolve(documentationRootDir, '../src/components/Select.vue');
  return await docs.parse(file);
};
