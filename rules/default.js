module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    es6: true
  },
  plugins: [
    'react',
    'no-copy-paste-default-export',
    'no-loops'
  ],
  extends: 'eslint:recommended',
  settings: {
    react: {
      version: '0.14.0'
    }
  },
  rules: {
    // basic rules not included in eslint:recommended
    // that help us enforce our coding style

    // Possible Errors
    'no-cond-assign': 2,
    'comma-dangle': [2, 'never'],
    'no-copy-paste-default-export/default': 2,

    // Best Practices
    'no-new': 2,
    'no-param-reassign': 2,
    'no-return-assign': 2,
    'no-sequences': 2,
    eqeqeq: 2,
    'wrap-iife': [2, 'inside'],
    'no-loop-func': 2,
    'no-extend-native': 2,
    'no-native-reassign': 2,
    'dot-location': [2, 'property'],
    'no-loops/no-loops': 2,
    curly: 2,

    // Stylistic Issues
    'operator-assignment': [2, 'never'],
    'no-plusplus': 2,
    semi: [2, 'always'],
    'no-trailing-spaces': 2,
    quotes: [2, 'single'],
    'object-curly-spacing': [2, 'always'],
    'key-spacing': 2,
    'array-bracket-spacing': 2,
    indent: [2, 2, { SwitchCase: 1 }],
    'no-new-object': 2,
    'no-array-constructor': 2,
    'quote-props': [2, 'as-needed'],
    'keyword-spacing': 2,
    'comma-spacing': 2,
    'space-infix-ops': 2,
    'space-before-function-paren': [2, 'never'],
    'space-before-blocks': 2,
    'jsx-quotes': [2, 'prefer-single'],
    'dot-notation': 2,
    'no-multiple-empty-lines': 2,
    'spaced-comment': 2,
    'no-multi-spaces': 2,

    // Variables
    'no-unused-vars': 2,
    'no-restricted-globals': [2, 'find'],

    // ES6
    'constructor-super': 2,
    'no-const-assign': 2,
    'no-this-before-super': 2,
    'no-use-before-define': 2,
    'no-var': 2,
    'prefer-const': 2,
    'no-class-assign': 2,
    'prefer-arrow-callback': 2,
    'object-shorthand': [2, 'always'],
    'arrow-spacing': 2,
    'prefer-spread': 2,
    'prefer-template': 2,


    // React
    'react/display-name': [2, { ignoreTranspilerName: false }],
    'react/jsx-boolean-value': 2,
    'react/jsx-closing-bracket-location': 2,
    'react/jsx-curly-spacing': [2, 'never'],
    'react/jsx-equals-spacing': 2,
    'react/jsx-indent-props': [2, 2],
    'react/jsx-indent': [2, 2],
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-undef': 2,
    'react/jsx-pascal-case': 2,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/no-deprecated': 2,
    'react/no-did-mount-set-state': 2,
    'react/no-did-update-set-state': 2,
    'react/no-direct-mutation-state': 2,
    'react/no-multi-comp': [2, { ignoreStateless: true }],
    'react/no-unknown-property': 2,
    'react/prefer-es6-class': 2,
    'react/react-in-jsx-scope': 2,
    'react/self-closing-comp': 2,
    'react/jsx-wrap-multilines': 2,
    'react/jsx-tag-spacing': [2, { beforeSelfClosing: 'always' }],

    // Warnings
    // things that could be ok in dev but not in prod
    'no-console': 1,
    'no-constant-condition': 1,
    'no-debugger': 1
  }
};
