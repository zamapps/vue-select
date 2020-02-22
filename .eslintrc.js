module.exports = {
  plugins: ['prettier'],
  extends: [
    'plugin:prettier/recommended',
    'plugin:vue/recommended',
    'prettier/vue'
  ],
  ignorePatterns: ['node_modules/', 'dist/', 'coverage/'],
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    // indent: ['error', 2],
    'no-console': 'off',
    'no-debugger': 'error',
    'prettier/prettier': 'error',
    'vue/html-self-closing': 'off',
    'vue/max-attributes-per-line': 'off'
  }
};
