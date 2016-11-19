const CLIEngine = require('eslint').CLIEngine;
const config = require('../rules/default.js');

describe('eslint-config-buildo', () => {

  it('lints correctly', () => {
    const eslint = new CLIEngine({
      configFile: 'rules/default.js'
    });
    const report = eslint.executeOnFiles(['test/code']);
    expect(report.results.length).toBeGreaterThan(0);
    expect(report.errorCount).toBe(0);
  });

})
