module.exports = {
  env: {
    es6: true
  },
  root: true,
  extends: ['@winfe/eslint-config-winex/eslintrc.node.js', 'prettier'],
  globals: {
    use: true
  },
  parserOptions: {
    ecmaVersion: 2017
  },
  rules: {
    complexity: [
      'error',
      {
        max: 50
      }
    ],
    'import/prefer-default-export': 0
  }
};
