# eslint-config-buildo

[![Greenkeeper badge](https://badges.greenkeeper.io/buildo/eslint-config.svg)](https://greenkeeper.io/)
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
                 eslint-config-buildo
```

If you'd rather install them globally, you need to explictly require some
plugins as well:

```sh
npm i -g babel-eslint\
         eslint\
         eslint-config-buildo\
         eslint-plugin-no-copy-paste-default-export\
         eslint-plugin-no-loops\
         eslint-plugin-react
```

## Proposing a new rule
If you are proposing a new rule, you can use [`linto`](http://github.com/buildo/linto) to pre-check whether it will cause new errors or warnings in the existing projects.

First, get the latest version of linto:

```
yarn global add linto
# or if you have time
npm install -g linto
```

Then you can use the configuration you'll find in this repo as a base.

#### Example
Suppose you want to propose the addition of `guard-for-in`. Edit the `linto-config.yml` by adding the rule under test to the `eslintConfig` section:

```yaml
repos:
  // ...
eslintConfig:
  // ...
  rules:
    guard-for-in: 2
}
```

Then run linto

```sh
linto run -c linto-config.yml
```

This will generate a report that you can copy-paste on a GitHub issue.

> #### NOTE
> `linto` purposely ignores the project-specific configurations, so you may run into errors not directly related to the rule under test. If that's the case, simply turn off the offending rules in the configuration, to get more precise results. For instance, if you get a lot of `max-len` errors, just do:

```yaml
repos:
  // ...
eslintConfig:
  // ...
  rules:
    max-len: 0
    guard-for-in: 2
```

You can also do the same for a single repo. For example, this turns off the `semi` rule only for the 'buildo/foo' repo:

```yaml
repos:
  - owner: buildo
    name: foo
    eslintConfig:
      rules:
        semi: 0
  // ...
eslintConfig:
  // ...
  rules:
    guard-for-in: 2
```

## Proposing a new plugin
Similarly to rules, you can test new plugins (and their rules). If you add any entries to the `plugins` section of the ESLint configuration, they will get installed and made available while `linto` runs.

#### Example
Suppose you want to propose the addition of `eslint-plugin-import`. Proceed like before, using a configuration like:

```yaml
repos:
  // ...
eslintConfig:
  // ...,
  plugins:
    - import
  rules:
    import/named: 2
```
