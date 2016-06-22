# eslint-config-buildo
buildo's eslint shared config

## Usage
In your project's `.eslintrc`

```js
{
  "extends": "buildo"
}
```

If you need to override or turn off rules:

```js
{
  "extends": "buildo",
  "rules": {
    "comma-dangle": 0, // disable trailing commas
    "jsx-quotes": "prefer-double" // change
  }
}
```

You will need the following npm packages:

```sh
npm i --save-dev babel-eslint\
                 eslint\
                 eslint-config-buildo\
                 eslint-plugin-no-copy-paste-default-export\
                 eslint-plugin-no-loops\
                 eslint-plugin-react
```

Or, if you'd rather install them globally:

```sh
npm i -g babel-eslint\
         eslint\
         eslint-config-buildo\
         eslint-plugin-no-copy-paste-default-export\
         eslint-plugin-no-loops\
         eslint-plugin-react
```
