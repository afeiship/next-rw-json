const nx = require('@feizheng/next-js-core2');
require('../src/next-rollup-banner');

describe('api.basic test', () => {
  test('nx.rollupBanner', function() {
    const res = nx.rollupBanner();
    console.log(res);
    expect(typeof res).toBe('string');
  });
});
