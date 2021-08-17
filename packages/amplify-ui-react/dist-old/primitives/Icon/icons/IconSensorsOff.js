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
exports.IconSensorsOff = void 0;
var jsx_runtime_1 = require('react/jsx-runtime');
var IconSensorsOff = function (props) {
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
              d: 'M6.71,8.84C6.58,9.2,6.5,9.59,6.5,10c0,0.96,0.39,1.84,1.03,2.47l-1.06,1.06C5.56,12.63,5,11.38,5,10 c0-0.83,0.22-1.61,0.58-2.3L4.47,6.59C3.86,7.59,3.5,8.75,3.5,10c0,1.79,0.73,3.42,1.91,4.59l-1.06,1.06C2.9,14.21,2,12.21,2,10 c0-1.67,0.51-3.21,1.38-4.5L1.87,3.99l1.06-1.06l14.14,14.14l-1.06,1.06L6.71,8.84z M14.59,5.41l1.06-1.06C17.1,5.79,18,7.79,18,10 c0,1.67-0.51,3.22-1.38,4.5l-1.09-1.09c0.61-0.99,0.97-2.16,0.97-3.41C16.5,8.21,15.77,6.58,14.59,5.41z M12.47,7.53l1.06-1.06 C14.44,7.37,15,8.62,15,10c0,0.83-0.2,1.62-0.57,2.31l-1.14-1.14c0.13-0.37,0.2-0.76,0.2-1.18C13.5,9.04,13.11,8.16,12.47,7.53z',
            },
            void 0
          ),
        ],
      }
    ),
    void 0
  );
};
exports.IconSensorsOff = IconSensorsOff;
//# sourceMappingURL=IconSensorsOff.js.map