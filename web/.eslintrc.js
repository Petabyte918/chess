module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/camelcase': 'off',
    'import/extensions': 'off',
    'import/export': 'off',
    'arrow-parens': 'off',
    'arrow-body-style': 'off',
    'curly': 'off',
    'eqeqeq': 'off',
    'func-call-spacing': 'off',
    'guard-for-in': 'off',
    'object-property-newline': 'off',
    'object-curly-newline': ['error', {
      ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
      ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
      ImportDeclaration: 'never',
      ExportDeclaration: { multiline: true, consistent: true },
    }],
    'one-var': 'off',
    'one-var-declaration-per-line': 'off',
    'max-len': ['error', { 'code': 120 }],
    'nonblock-statement-body-position': 'off',
    'no-shadow': 'off',
    'no-spaced-func': 'off',
    'no-return-assign': 'off',
    'no-param-reassign': 'off',
    'no-mixed-operators': ['error', { allowSamePrecedence: true }],
    'no-inner-declarations': 'off',
    'no-case-declarations': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
  },
};
