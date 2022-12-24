module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint-config-prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'eslint-config-prettier'],
  rules: {
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'no-console': 0,
    'no-var': 'error',
    'prefer-const': 'error',
  },
};
