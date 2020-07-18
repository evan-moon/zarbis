module.exports = {
  root: true,
  globals: {
    __PATH_PREFIX__: true,
  },
  env: {
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'eslint-config-prettier', 'react-app'],
  plugins: ['@typescript-eslint', 'import', 'prettier'],
  // settings: { 'import/resolver': { typescript: {} } },
  rules: {
    'prettier/prettier': 'error',
    'no-implicit-coercion': 'error',
    'no-undef': 'off',
    indent: 'off',
    '@typescript-eslint/indent': 'off',
    semi: 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-extra-boolean-cast': 'off',
    'getter-return': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-inferrable-types': 'warn',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/camelcase': ['error', { properties: 'never', ignoreDestructuring: true }],
    '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
    '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: [
          'public-static-field',
          'private-static-field',
          'public-instance-field',
          'private-instance-field',
          'public-constructor',
          'private-constructor',
          'public-instance-method',
          'private-instance-method',
        ],
      },
    ],
    'no-warning-comments': [
      'warn',
      {
        terms: ['TODO', 'FIXME', 'XXX', 'BUG'],
        location: 'anywhere',
      },
    ],
    'prefer-const': 'error',
    'no-var': 'error',
    curly: ['error', 'all'],
    'import/no-cycle': ['error', { maxDepth: Infinity }],
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'import/no-duplicates': 'error',
  },
};
