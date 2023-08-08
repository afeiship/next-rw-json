const path = require('path');

require('../src');

jest.setTimeout(60 * 1000);

describe('api.basic test', () => {
  test('Read pkg.json', function () {
    const RwJSON = nx.RwJson;
    const pkgPath = path.join(process.cwd(), 'package.json');
    const pkg = RwJSON.read(pkgPath);
    expect(pkg.name).toBe('@jswork/next-rw-json');
  });

  test('read json5', () => {
    const RwJSON = nx.RwJson;
    const pkgPath = path.join(process.cwd(), '__tests__/test.json5');
    const pkg = RwJSON.read(pkgPath);
    expect(pkg.backwardsCompatible).toBe('with JSON');
  });
});
