var production = process.env.NODE_ENV === 'production';
module.exports = {
  "extends": ["eslint-config-buildo/rules/default"].concat(production ? "eslint-config-buildo/rules/production" : []),
  "rules": {}
};