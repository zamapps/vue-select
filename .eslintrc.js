module.exports = {
  env: {
    node: true
  },
  extends: [
    'plugin:vue/recommended',
    'plugin:import/errors',
    'eslint:recommended',
    'prettier',
    'plugin:prettier/recommended',
    'prettier/vue'
  ],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 8,
    sourceType: 'module'
  },
  rules: {
    quotes: ['error', 'single'],
    indent: ['error', 2],
    'no-console': 'off',
    'no-debugger': 'error',
    semi: ['error', 'always'],
    'prettier/prettier': 'error',
    'vue/html-self-closing': 'off',
    'vue/max-attributes-per-line': 'off'
  },
};
