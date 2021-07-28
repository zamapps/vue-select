const clientDynamicModules = require('./clientDynamicModules.js');

module.exports = {
  clientDynamicModules: async () => await clientDynamicModules(),
};
