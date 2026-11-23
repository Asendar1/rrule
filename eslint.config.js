const { defineConfig, globalIgnores } = require('eslint/config')

const globals = require('globals')
const tsParser = require('@typescript-eslint/parser')
const _import = require('eslint-plugin-import-x')
const jsdoc = require('eslint-plugin-jsdoc')
const typescriptEslint = require('@typescript-eslint/eslint-plugin')

const { fixupPluginRules } = require('@eslint/compat')

const js = require('@eslint/js')

const { FlatCompat } = require('@eslint/eslintrc')

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

module.exports = defineConfig([
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },

      parser: tsParser,
      sourceType: 'module',

      parserOptions: {
        project: 'tsconfig.json',
      },
    },

    extends: compat.extends(
      'prettier',
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
    ),

    plugins: {
      'import-x': fixupPluginRules(_import),
      jsdoc,
      '@typescript-eslint': typescriptEslint,
    },

    rules: {
      '@typescript-eslint/await-thenable': 'error',
      '@typescript-eslint/consistent-type-assertions': 'error',

      '@typescript-eslint/naming-convention': 'off',
      '@typescript-eslint/no-empty-function': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-misused-new': 'error',
      '@typescript-eslint/no-unnecessary-qualifier': 'error',
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',

      '@typescript-eslint/no-unused-expressions': [
        'error',
        {
          allowTaggedTemplates: true,
          allowShortCircuit: true,
        },
      ],

      '@typescript-eslint/prefer-namespace-keyword': 'error',

      '@typescript-eslint/triple-slash-reference': [
        'error',
        {
          path: 'always',
          types: 'prefer-import',
          lib: 'always',
        },
      ],

      '@typescript-eslint/unified-signatures': 'error',
      'brace-style': ['error', '1tbs'],
      'comma-dangle': 'off',
      curly: ['error', 'multi-line'],
      'eol-last': 'error',
      eqeqeq: ['error', 'smart'],

      'id-denylist': [
        'error',
        'any',
        'Number',
        'String',
        'string',
        'Boolean',
        'boolean',
        'Undefined',
        'undefined',
      ],

      'id-match': 'error',
      'import-x/no-deprecated': 'error',
      'jsdoc/check-alignment': 'error',
      'jsdoc/check-indentation': 'error',
      'new-parens': 'error',
      'no-caller': 'error',
      'no-case-declarations': 'off',
      'no-cond-assign': 'error',
      'no-constant-condition': 'error',
      'no-control-regex': 'error',
      'no-duplicate-imports': 'error',
      'no-empty': 'error',
      'no-empty-function': 'error',
      'no-eval': 'error',
      'no-fallthrough': 'error',
      'no-invalid-regexp': 'error',
      'no-multiple-empty-lines': 'error',
      'no-redeclare': 'error',
      'no-regex-spaces': 'error',
      'no-return-await': 'error',
      'no-throw-literal': 'error',
      'no-trailing-spaces': 'error',
      'no-underscore-dangle': 'off',
      'no-unexpected-multiline': 'off',
      'no-unused-expressions': 'off',
      'no-unused-labels': 'error',
      'no-var': 'error',
      'one-var': ['error', 'never'],
      quotes: 'off',
      radix: 'error',
      semi: 'off',
      'space-in-parens': ['error', 'never'],

      'spaced-comment': [
        'error',
        'always',
        {
          markers: ['/'],
        },
      ],

      'use-isnan': 'error',
    },
  },
  {
    files: ['**/*.test.*'],

    rules: {
      '@typescript-eslint/no-unused-expressions': 'off',
    },
  },
  globalIgnores([
    '**/dist/',
    '**/coverage/',
    '**/eslint.config.js',
    '**/webpack.config.js',
    '**/.eslintrc.js',
    '**/jest.config.js',
  ]),
])
