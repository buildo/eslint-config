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
