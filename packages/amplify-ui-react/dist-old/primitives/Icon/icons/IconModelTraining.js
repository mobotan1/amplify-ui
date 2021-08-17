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
exports.IconModelTraining = void 0;
var jsx_runtime_1 = require('react/jsx-runtime');
var IconModelTraining = function (props) {
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
                  d: 'M9.25,16h1.5v-1h-1.5V16z M10,8L10,8L10,8C10,8,10,8,10,8c-1.38,0-2.5,1.12-2.5,2.5C7.5,12,9.25,13,9.25,14 c0.35,0,1.5,0,1.5,0c0-1,1.75-2,1.75-3.5C12.5,9.12,11.38,8,10,8z M6.47,13.53l-0.71,0.71C4.67,13.16,4,11.66,4,10 c0-3.31,2.69-6,6-6V2l2.5,2.5L10,7V5c-2.76,0-5,2.24-5,5C5,11.38,5.56,12.63,6.47,13.53z M14.24,14.24l-0.71-0.71 C14.44,12.63,15,11.38,15,10s-0.56-2.63-1.47-3.53l0.71-0.71C15.33,6.84,16,8.34,16,10S15.33,13.16,14.24,14.24z',
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
exports.IconModelTraining = IconModelTraining;
//# sourceMappingURL=IconModelTraining.js.map