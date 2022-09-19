module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'import/extensions': ['error', 'ignorePackages', { js: 'always' }],
    'no-alert': 'off',
    'prefer-destructuring': ['error', { object: false, array: false }],
    'class-methods-use-this': 'off',
    'max-depth': ['error', 2],
    'max-lines-per-function': ['error', 15],
    'no-unused-expressions': ['error', { allowShortCircuit: true }],
    'class-methods-use-this': 'off',
  },
  ignorePatterns: ['**/*.test.*'],
};
