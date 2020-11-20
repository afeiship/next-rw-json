/*!
 * name: @jswork/next-rollup-banner
 * description: Rollup banner for next.
 * homepage: https://github.com/afeiship/next-rollup-banner
 * version: 1.0.0
 * date: 2020-11-20 13:21:54
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var nxNiceComments = nx.niceComments || require('@jswork/next-nice-comments');

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
