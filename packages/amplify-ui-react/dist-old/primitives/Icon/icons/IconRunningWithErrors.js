'use strict';
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]];
      }
    return t;
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.IconRunningWithErrors = void 0;
var jsx_runtime_1 = require('react/jsx-runtime');
var IconRunningWithErrors = function (props) {
  var size = props.size,
    _a = props.fill,
    fill = _a === void 0 ? 'currentColor' : _a,
    ariaLabel = props.ariaLabel,
    rest = __rest(props, ['size', 'fill', 'ariaLabel']);
  return jsx_runtime_1.jsxs(
    'svg',
    __assign(
      {
        xmlns: 'http://www.w3.org/2000/svg',
        'enable-background': 'new 0 0 20 20',
        height: '20',
        viewBox: '0 0 20 20',
        width: '20',
      },
      {
        children: [
          jsx_runtime_1.jsx(
            'rect',
            { fill: 'none', height: '20', width: '20' },
            void 0
          ),
          jsx_runtime_1.jsx(
            'path',
            {
              d: 'M18,8v7h-1.5V8H18z M16.5,16.5V18H18v-1.5H16.5z M10,3.5c-3.58,0-6.5,2.92-6.5,6.5s2.92,6.5,6.5,6.5 c2.01,0,3.81-0.92,5-2.35l0,2.1c-1.37,1.1-3.11,1.75-5,1.75c-4.42,0-8-3.58-8-8s3.58-8,8-8l0,0c2.46,0,4.67,1.11,6.13,2.87L10,11 V3.5z',
            },
            void 0
          ),
        ],
      }
    ),
    void 0
  );
};
exports.IconRunningWithErrors = IconRunningWithErrors;
//# sourceMappingURL=IconRunningWithErrors.js.map