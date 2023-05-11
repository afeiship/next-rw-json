/*!
 * name: @jswork/next-rw-json
 * description: Read and write json file.
 * homepage: https://js.work
 * version: 1.0.0
 * date: 2023-05-11 22:25:34
 * license: MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = void 0;
var _next = _interopRequireDefault(require('@jswork/next'));
var _fs = _interopRequireDefault(require('fs'));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _typeof(obj) {
  '@babel/helpers - typeof';
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (obj) {
            return typeof obj;
          }
        : function (obj) {
            return obj &&
              'function' == typeof Symbol &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? 'symbol'
              : typeof obj;
          }),
    _typeof(obj)
  );
}
var NxRwJson = _next['default'].declare('nx.RwJson', {
  statics: {
    read: function read(inPath) {
      return JSON.parse(_fs['default'].readFileSync(inPath, 'utf-8').toString());
    },
    write: function write(inPath, inData) {
      if (_typeof(inData) === 'object') {
        inData = JSON.stringify(inData, null, 2);
      }
      _fs['default'].writeFileSync(inPath, inData);
    }
  }
});
if (typeof module !== 'undefined' && module.exports) {
  module.exports = NxRwJson;
}
var _default = NxRwJson;
exports['default'] = _default;
