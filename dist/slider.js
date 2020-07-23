/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// noinspection CssUnresolvedCustomProperty
var tmpl = "\n<style type=\"text/css\">\n:host {\n\t--ui-round-slider-track-color: #717171;\n\t--ui-round-slider-track-width: 3px;\n\tdisplay: block;\n}\nsvg {\n\tmax-height: 100%;\n\tmax-width: 100%;\n}\nsvg * {\n\tvector-effect: non-scaling-stroke;\n}\ntext {\n    font-size: 20px;\n    text-anchor: middle;\n    alignment-baseline: middle;\n}\npath {\n\tfill: none;\n\tstroke: var(--ui-round-slider-track-color);\n\tstroke-width: var(--ui-round-slider-track-width);\n}\ncircle {\n\tfill: var(--ui-round-slider-track-color);\n}\n</style>\n<svg viewBox=\"0 0 100 100\">\n\t<path d=\"M 24.288495612538433 80.64177772475912 A 40 40 90 1 1 75.71150438746159 80.64177772475911\"></path>\n\t<path id=\"track\" d=\"\"></path>\n\t<circle id=\"handle\" r=\"4\" cx=\"50\" cy=\"50\"></circle>\n\t<text x=\"50\" y=\"50\"></text>\n</svg>\n";
var pi = Math.PI;
var cos = Math.cos;
var sin = Math.sin;
var atan2 = Math.atan2;
var sqrt = Math.sqrt;
var pow = Math.pow;

var add = function add(_ref, _ref2) {
  var _ref3 = _slicedToArray(_ref, 2),
      a1 = _ref3[0],
      a2 = _ref3[1];

  var _ref4 = _slicedToArray(_ref2, 2),
      b1 = _ref4[0],
      b2 = _ref4[1];

  return [a1 + b1, a2 + b2];
};

var multiply = function multiply(_ref5, _ref6) {
  var _ref7 = _slicedToArray(_ref5, 2),
      _ref7$ = _slicedToArray(_ref7[0], 2),
      a = _ref7$[0],
      b = _ref7$[1],
      _ref7$2 = _slicedToArray(_ref7[1], 2),
      c = _ref7$2[0],
      d = _ref7$2[1];

  var _ref8 = _slicedToArray(_ref6, 2),
      x = _ref8[0],
      y = _ref8[1];

  return [a * x + b * y, c * x + d * y];
};

var rotation = function rotation(x) {
  return [[cos(x), -sin(x)], [sin(x), cos(x)]];
};

var constrain = function constrain(x, min, max) {
  return typeof x !== 'number' || x === NaN || x < min ? min : x > max ? max : x;
};

var deg2rad = function deg2rad(x) {
  return x * pi / 180;
};

var rad2deg = function rad2deg(x) {
  return 180 / pi * x;
};

var vector2position = function vector2position(angle, radius) {
  return [radius * cos(deg2rad(angle)), radius * -sin(deg2rad(angle))];
};

var position2vector = function position2vector(x, y) {
  return [rad2deg(atan2(y, x)), sqrt(pow(x, 2) + pow(y, 2))];
};

var arc = function arc(cx, cy, radius, start, sweep, rotate) {
  start = deg2rad(start);
  sweep = deg2rad(sweep) % (2 * pi);
  rotate = deg2rad(rotate);
  var matrix = rotation(rotate);

  var _add = add(multiply(matrix, [radius * cos(start), radius * sin(start)]), [cx, cy]),
      _add2 = _slicedToArray(_add, 2),
      x1 = _add2[0],
      y1 = _add2[1];

  var _add3 = add(multiply(matrix, [radius * cos(start + sweep), radius * sin(start + sweep)]), [cx, cy]),
      _add4 = _slicedToArray(_add3, 2),
      x2 = _add4[0],
      y2 = _add4[1];

  var a = rotate / (2 * pi) * 360;
  var b = sweep > pi ? 1 : 0;
  var c = sweep > 0 ? 1 : 0;
  return {
    path: ['M', x1, y1, 'A', radius, radius, a, b, c, x2, y2].join(' '),
    start: [x1, y1],
    end: [x2, y2]
  };
};

var EVT_START, EVT_MOVE, EVT_CANCEL, EVT_END;

try {
  // document.createEvent('TouchEvent')
  EVT_START = 'touchstart';
  EVT_MOVE = 'touchmove';
  EVT_CANCEL = 'touchcancel';
  EVT_END = 'touchend';
  console.log('Touch device detected.');
} catch (e) {
  EVT_START = 'pointerdown';
  EVT_MOVE = 'pointermove';
  EVT_CANCEL = 'pointercancel';
  EVT_END = 'pointerup';
  console.log('No touch device found');
}

var TouchSlider = /*#__PURE__*/function (_HTMLElement) {
  _inherits(TouchSlider, _HTMLElement);

  var _super = _createSuper(TouchSlider);

  _createClass(TouchSlider, [{
    key: "setValue",
    value: function setValue(value) {
      value == undefined ? this.removeAttribute('value') : this.setAttribute('value', value);
      this.render();
    }
  }, {
    key: "min",
    get: function get() {
      return this.hasAttribute('min') ? this.getAttribute('min') : 0;
      return parseFloat(this.getAttribute('min') || '0');
    },
    set: function set(value) {
      this.setAttribute('min', value);
    }
  }, {
    key: "max",
    get: function get() {
      return this.hasAttribute('max') ? this.getAttribute('max') : 100;
      return parseFloat(this.getAttribute('max') || '100');
    },
    set: function set(value) {
      this.setAttribute('max', value);
    }
  }, {
    key: "step",
    get: function get() {
      return this.hasAttribute('step') ? this.getAttribute('step') : 1;
      return parseFloat(this.getAttribute('step') || '1');
    },
    set: function set(value) {
      this.setAttribute('step', value);
    }
  }, {
    key: "range",
    get: function get() {
      return this.max - this.min;
    }
  }, {
    key: "value",
    get: function get() {
      return this.getAttribute('value') || 0;
    },
    set: function set(value) {
      this.setValue(value);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ['value', 'min', 'max', 'step', 'track:color', 'value:text'];
    }
  }]);

  function TouchSlider(props) {
    var _this;

    _classCallCheck(this, TouchSlider);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "lastChangedValue", null);

    _defineProperty(_assertThisInitialized(_this), "onTouchStart", function (e) {
      var box = _this.bounds = _this.$svg.getBoundingClientRect();

      var ptr = e.touches ? e.touches[0] : e;
      var x = (ptr.clientX - box.left) / box.width * 100 - 50,
          y = (ptr.clientY - box.top) / box.height * 100 - 50;

      var _position2vector = position2vector(x, y),
          _position2vector2 = _slicedToArray(_position2vector, 2),
          radius = _position2vector2[1];

      if ((e.button == 0 || e.touches) && radius > 35 && radius < 45 && e.target.closest('svg')) {
        _this.dragging = true;
        top.addEventListener(EVT_MOVE, _this.onTouchMove, true);
        top.addEventListener(EVT_CANCEL, _this.onTouchEnd, true);
        top.addEventListener(EVT_END, _this.onTouchEnd, true);
        e.stopPropagation();
        e.preventDefault();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onTouchMove", function (e) {
      if (_this.dragging && _this.bounds) {
        var box = _this.bounds;
        var ptr = e.touches ? e.touches[0] : e;
        var x = (ptr.clientX - box.left) / box.width * 100 - 50,
            y = (ptr.clientY - box.top) / box.height * 100 - 50;

        var _position2vector3 = position2vector(x, y),
            _position2vector4 = _slicedToArray(_position2vector3, 1),
            angle = _position2vector4[0];

        angle = angle - 90;
        if (angle < 0) angle = 360 + angle;

        if (angle >= 35 && angle <= 325) {
          if (angle < 40) angle = 40;
          if (angle > 320) angle = 320;
          angle = (angle - 40) / (320 - 40) * _this.range;
          _this.lastChangedValue = Math.round((angle + _this.min) / _this.step) * _this.step;

          _this.render(_this.lastChangedValue);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onTouchEnd", function (e) {
      _this.dragging = false;

      if (_this.lastChangedValue !== null) {
        _this.setAttribute('value', _this.lastChangedValue);

        _this.lastChangedValue = null;
      }

      top.removeEventListener(EVT_MOVE, _this.onTouchMove, true);
      top.removeEventListener(EVT_CANCEL, _this.onTouchEnd, true);
      top.removeEventListener(EVT_END, _this.onTouchEnd, true);

      _this.dispatchEvent(new Event('change'));
    });

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.value;
      var start = 40;
      var sweep = (value - _this.min) / _this.range * 280;

      var _arc = arc(50, 50, 40, start, sweep, 90),
          path = _arc.path,
          _arc$end = _slicedToArray(_arc.end, 2),
          x = _arc$end[0],
          y = _arc$end[1];

      var trackColor = _this.getAttribute('track:color') || undefined;

      if (_this.$handle) {
        _this.$handle.setAttribute('cx', x);

        _this.$handle.setAttribute('cy', y);

        _this.$handle.style.fill = trackColor;
      }

      if (_this.$track) {
        _this.$track.setAttribute('d', path);

        _this.$track.style.stroke = trackColor;
      }

      if (_this.$text) {
        _this.$text.innerHTML = _this.getAttribute('value:text');
      }
    });

    _this.attachShadow({
      mode: 'open'
    }).innerHTML = tmpl;
    _this.$svg = _this.shadowRoot.querySelector('svg');
    _this.$text = _this.shadowRoot.querySelector('text');
    _this.$handle = _this.shadowRoot.getElementById('handle');
    _this.$track = _this.shadowRoot.getElementById('track');
    return _this;
  }

  _createClass(TouchSlider, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      if (this.isConnected) {
        this.shadowRoot.addEventListener(EVT_START, this.onTouchStart, true);
      }
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.shadowRoot.removeEventListener(EVT_START, this.onTouchStart, true);
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback() {
      setTimeout(this.render);
    }
  }]);

  return TouchSlider;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define('ui-round-slider', TouchSlider);

/***/ })
/******/ ]);