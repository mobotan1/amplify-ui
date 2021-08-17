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
exports.IconOnlinePrediction = void 0;
var jsx_runtime_1 = require('react/jsx-runtime');
var IconOnlinePrediction = function (props) {
  var size = props.size,
    _a = props.fill,
    fill = _a === void 0 ? 'currentColor' : _a,
    ariaLabel = props.ariaLabel,
    rest = __rest(props, ['size', 'fill', 'ariaLabel']);
  return jsx_runtime_1.jsx(
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
        children: jsx_runtime_1.jsxs(
          'g',
          {
            children: [
              jsx_runtime_1.jsx(
                'rect',
                { fill: 'none', height: '20', width: '20', x: '0', y: '0' },
                void 0
              ),
              jsx_runtime_1.jsx(
                'path',
                {
                  d: 'M9.25,14h1.5v1h-1.5V14z M10,7L10,7L10,7C10,7,10,7,10,7C8.62,7,7.5,8.12,7.5,9.5C7.5,11,9.25,12,9.25,13 c0.35,0,1.5,0,1.5,0c0-1,1.75-2,1.75-3.5C12.5,8.12,11.38,7,10,7z M4,10c0-1.65,0.67-3.15,1.76-4.24L5.05,5.05 C3.78,6.32,3,8.07,3,10c0,1.93,0.78,3.68,2.05,4.95l0.71-0.71C4.67,13.15,4,11.65,4,10z M17,10c0-1.93-0.78-3.68-2.05-4.95 l-0.71,0.71C15.33,6.85,16,8.35,16,10c0,1.65-0.67,3.15-1.76,4.24l0.71,0.71C16.22,13.68,17,11.93,17,10z M6.46,13.54l0.71-0.71 C6.45,12.1,6,11.1,6,10c0-1.1,0.45-2.1,1.17-2.83L6.46,6.46C5.56,7.37,5,8.62,5,10C5,11.38,5.56,12.63,6.46,13.54z M14,10 c0,1.1-0.45,2.1-1.17,2.83l0.71,0.71C14.44,12.63,15,11.38,15,10c0-1.38-0.56-2.63-1.46-3.54l-0.71,0.71C13.55,7.9,14,8.9,14,10z',
                },
                void 0
              ),
            ],
          },
          void 0
        ),
      }
    ),
    void 0
  );
};
exports.IconOnlinePrediction = IconOnlinePrediction;
//# sourceMappingURL=IconOnlinePrediction.js.map