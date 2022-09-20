module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  parser: ['babel-eslint'],
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
    'import/no-unresolved': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        json: 'never',
      },
    ],
    'no-alert': 'off',
    'prefer-destructuring': ['error', { object: false, array: false }],
    'class-methods-use-this': 'off',
    'max-depth': ['error', 2],
    'max-lines-per-function': ['error', 200],
    'no-unused-expressions': ['error', { allowShortCircuit: true }],
    'class-methods-use-this': 'off',
  },
  ignorePatterns: ['**/*.test.*'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
