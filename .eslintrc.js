module.exports = {
  extends: [
    "plugin:vue/recommended",
    "prettier/vue",
    "plugin:prettier/recommended"
  ],
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
