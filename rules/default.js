module.exports = {
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "plugins": [
    "react",
    "no-copy-paste-default-export",
    "no-loops"
  ],
  "ecmaFeatures": {
    "jsx": true,
    "modules": true
  },
  "extends": "eslint:recommended",
  "rules": {
    // basic rules not included in eslint:recommended
    // that help us enforce our coding style
    "constructor-super": 2,
    "no-const-assign": 2,
    "no-this-before-super": 2,
    "no-use-before-define": 2,
    "no-var": 2,
    "prefer-const": 2,
    "no-class-assign": 2,
    "no-cond-assign": 2,
    "no-new": 2,
    "no-param-reassign": 2,
    "no-return-assign": 2,
    "prefer-arrow-callback": 2,
    "operator-assignment": [2, "never"],
    "no-sequences": 2,
    "no-plusplus": 2,
    "eqeqeq": 2, // (fixable)
    "no-unused-vars": 2,
    "comma-dangle": [2, "never"],
    "semi": [2, "always"], // (fixable)
    "no-trailing-spaces": 2, // (fixable)
    "quotes": [2, "single"], // (fixable)
    "object-shorthand": [2, "always"],
    "object-curly-spacing": [2, "always"], // (fixable)
    "key-spacing": 2,
    "indent": [2, 2, {"SwitchCase": 1}], // (fixable)

    // react-specific rules
    "react/jsx-boolean-value": 2,
    "react/jsx-no-undef": 2,
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/no-did-mount-set-state": 2,
    "react/no-did-update-set-state": 2,
    "react/no-direct-mutation-state": 2,
    "react/no-multi-comp": 2,
    "react/no-unknown-property": 2,
    "react/react-in-jsx-scope": 2,
    "react/self-closing-comp": 2,
    "react/wrap-multilines": 2,
    "react/jsx-curly-spacing": [2, "never"],
    "react/jsx-closing-bracket-location": 2,
    "react/jsx-indent-props": [2, 2],
    "react/jsx-no-duplicate-props": 2,

    // things that could be ok in dev but not in prod
    "no-console": 1,
    "no-constant-condition": 1,
    "no-debugger": 1
  }
}
