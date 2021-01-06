/*!
 * name: @jswork/next-rollup-banner
 * description: Rollup banner for next.
 * homepage: https://github.com/afeiship/next-rollup-banner
 * version: 1.0.1
 * date: 2021-01-06 22:50:06
 * license: MIT
 */

(function () {
  var global = global || Function('return this')();
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
