module.exports = {
  parser: '@babel/eslint-parser',
  plugins: ['prettier'],
  extends: [
    'plugin:prettier/recommended',
    'plugin:vue/recommended',
    'prettier/vue'
  ],
  ignorePatterns: ['node_modules/', 'dist/', 'coverage/']
}
