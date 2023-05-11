require('../src');

const path = require('path');

jest.setTimeout(60 * 1000);

describe('api.basic test', () => {
  test('Read pkg.json', function () {
    const RwJSON = nx.RwJson;
    const pkgPath = path.join(process.cwd(), 'package.json');
    const pkg = RwJSON.read(pkgPath);
    expect(pkg.name).toBe('@jswork/next-rw-json');
  });
});
