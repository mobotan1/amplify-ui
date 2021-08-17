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
exports.IconLiquor = void 0;
var jsx_runtime_1 = require('react/jsx-runtime');
var IconLiquor = function (props) {
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
            'g',
            {
              children: jsx_runtime_1.jsx(
                'rect',
                { fill: 'none', height: '20', width: '20' },
                void 0
              ),
            },
            void 0
          ),
          jsx_runtime_1.jsx(
            'g',
            {
              children: jsx_runtime_1.jsxs(
                'g',
                {
                  children: [
                    jsx_runtime_1.jsx(
                      'path',
                      {
                        d: 'M4,12c0,0.93,0.64,1.71,1.5,1.93V16H4v1h4v-1H6.5v-2.07C7.36,13.71,8,12.93,8,12V6H4V12z M5,7h2v2.3H5V7z',
                      },
                      void 0
                    ),
                    jsx_runtime_1.jsx(
                      'path',
                      {
                        d: 'M16.35,7.76l-1.2-0.45c-0.39-0.15-0.65-0.52-0.65-0.94V3.5C14.5,3.22,14.28,3,14,3h-2c-0.28,0-0.5,0.22-0.5,0.5v2.87 c0,0.42-0.26,0.79-0.65,0.94l-1.2,0.45C9.26,7.9,9,8.28,9,8.69V16c0,0.55,0.45,1,1,1h6c0.55,0,1-0.45,1-1V8.69 C17,8.28,16.74,7.9,16.35,7.76z M12.5,4h1v1h-1V4z M16,16h-6v-2h6V16z M16,10h-6V8.69l1.2-0.45c0.78-0.29,1.3-1.04,1.3-1.87V6h1 v0.37c0,0.83,0.52,1.58,1.3,1.87L16,8.69V10z',
                      },
                      void 0
                    ),
                  ],
                },
                void 0
              ),
            },
            void 0
          ),
        ],
      }
    ),
    void 0
  );
};
exports.IconLiquor = IconLiquor;
//# sourceMappingURL=IconLiquor.js.map