module.exports = {
  env: { es2021: true, node: true },
  extends: ['airbnb', 'airbnb-typescript', 'eslint-config-prettier', 'prettier'],
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: { 'import/resolver': { typescript: { alwaysTryTypes: true } } },
  rules: {
    // # Modules
    // package.jsonに列挙されていなくてもimportはOK
    'import/no-extraneous-dependencies': 'off',
    // default exportは無くてもOK
    'import/prefer-default-export': 'off',

    'sort-imports': ['error', { ignoreDeclarationSort: true }],
    'import/order': [
      'error',
      {
        // groups: default value is ["builtin", "external", "parent", "sibling", "index"]
        pathGroups: [
          { pattern: 'react', group: 'builtin' },
          { pattern: 'react-dom', group: 'builtin', position: 'after' },
          { pattern: 'react-native', group: 'builtin', position: 'after' },
        ],
        pathGroupsExcludedImportTypes: ['react', 'react-dom'],
        'newlines-between': 'always',
        alphabetize: { order: 'asc' },
      },
    ],

    // componentはarrow関数のみ
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    // propsのスプレッド構文の使用OK
    'react/jsx-props-no-spreading': 'off',
    // defaultProps は使用しない
    'react/require-default-props': 'off',
    // StatusBar対策
    'react/style-prop-object': [2, { allow: ['StatusBar'] }],
  },
};
