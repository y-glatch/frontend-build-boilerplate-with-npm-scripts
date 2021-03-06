module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5'
      }
    ]
  }
};
