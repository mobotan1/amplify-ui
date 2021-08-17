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
exports.IconIcecream = void 0;
var jsx_runtime_1 = require('react/jsx-runtime');
var IconIcecream = function (props) {
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
              children: jsx_runtime_1.jsx(
                'g',
                {
                  children: jsx_runtime_1.jsx(
                    'path',
                    {
                      d: 'M13.97,6.73C13.83,4.65,12.12,3,10,3S6.17,4.65,6.03,6.73c-0.8,0.34-1.36,1.13-1.36,2.05c0,1.23,0.99,2.22,2.22,2.22 c0.04,0,0.07-0.01,0.11-0.01L10,17l3-6.01c0.04,0,0.07,0.01,0.11,0.01c1.23,0,2.22-0.99,2.22-2.22 C15.33,7.86,14.77,7.07,13.97,6.73z M10,14.76l-2.03-4.06c0.08-0.05,0.16-0.09,0.24-0.15C8.75,10.83,9.35,11,10,11 s1.25-0.17,1.79-0.44c0.07,0.06,0.15,0.1,0.24,0.15L10,14.76z',
                    },
                    void 0
                  ),
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
exports.IconIcecream = IconIcecream;
//# sourceMappingURL=IconIcecream.js.map