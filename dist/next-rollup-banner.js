/*!
 * name: @feizheng/next-rollup-banner
 * description: Rollup banner for next.
 * homepage: https://github.com/afeiship/next-rollup-banner
 * version: 1.0.2
 * date: 2020-09-01T06:38:22.228Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var nxNiceComments = nx.niceComments || require('@feizheng/next-nice-comments');

  nx.rollupBanner = function () {
    return nxNiceComments(
      [
        'name: <%= pkg.name %>',
        'description: <%= pkg.description %>',
        'homepage: <%= pkg.homepage %>',
        'version: <%= pkg.version %>',
        'date: ' + new Date().toISOString(),
        'license: <%= pkg.license %>'
      ],
      'raw'
    );
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.rollupBanner;
  }
})();
