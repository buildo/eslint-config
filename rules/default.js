module.exports = {
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "plugins": [
    "react",
    "no-copy-paste-default-export"
  ],
  "ecmaFeatures": {
    "jsx": true,
    "modules": true
  },
  "extends": "eslint:recommended",
  "rules": {
    // verify super() callings in constructors
    "constructor-super": 2,
    // disallow modifying variables that are declared using const
    "no-const-assign": 2,
    // disallow to use this/super before super() calling in constructors.
    "no-this-before-super": 2,
    // disallow use of variables before they are defined
    "no-use-before-define": 2,
    // require let or const instead of var
    "no-var": 2,
    // suggest using of const declaration for variables that are never modified after declared
    "prefer-const": 2,

    // Labonline
    "strict": [2, "global"],
    "quotes": [2, "single"],
    "object-curly-spacing": [2, "always"],
    "arrow-spacing": 2,
    "object-shorthand": 2,
    "prefer-spread": 2,
    "prefer-template": 2,
    "jsx-quotes": [2, "prefer-double"],
    "no-trailing-spaces": 2,

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

    // disallow use of console
    "no-console": 1,
    // disallow use of constant expressions in conditions
    "no-constant-condition": 1,
    // disallow use of debugger
    "no-debugger": 1
  }
}