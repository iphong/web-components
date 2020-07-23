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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

var div = document.createElement('div');
document.body.appendChild(div);
div.innerHTML = "\n<style>\n#logger {\n\tposition: absolute;\n    z-index: 1000;\n    bottom: 10px;\n    right: 10px;\n    background: grey;\n    border: 1px solid red;\n}\n</style>\n<pre id=\"logger\">\n\n</pre>\n";

var ExampleCardConfigEditor = /*#__PURE__*/function (_HTMLElement) {
  _inherits(ExampleCardConfigEditor, _HTMLElement);

  var _super = _createSuper(ExampleCardConfigEditor);

  function ExampleCardConfigEditor() {
    var _this;

    _classCallCheck(this, ExampleCardConfigEditor);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "handleChange", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
        var reader, text, event;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(e.target.id === 'import')) {
                  _context.next = 7;
                  break;
                }

                reader = new FileReader();
                _context.next = 4;
                return reader.readAsText(e.target.files[0]);

              case 4:
                text = _context.sent;
                reader.addEventListener('loadend', function (e) {
                  var event = new Event('config-changed', {
                    bubbles: true,
                    composed: true
                  });
                  event.detail = {
                    config: _objectSpread(_objectSpread({}, _this.config), {}, {
                      content: reader.result
                    })
                  };

                  _this.dispatchEvent(event);

                  e.target.value = '';
                });
                return _context.abrupt("return");

              case 7:
                event = new Event('config-changed', {
                  bubbles: true,
                  composed: true
                });
                event.detail = {
                  config: _objectSpread(_objectSpread({}, _this.config), {}, _defineProperty({}, e.target.id, e.target.value))
                };

                _this.dispatchEvent(event);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (e) {
      var tab = e.target.closest('paper-tab');

      if (tab) {
        var href = tab.getAttribute('href');

        _this.shadowRoot.querySelectorAll(href).forEach(function (content) {
          var _iterator = _createForOfIteratorHelper(content.parentNode.children),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var child = _step.value;
              child.setAttribute('hidden', 'true');
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          content.removeAttribute('hidden');
        });
      }
    });

    console.log('editor: new instance');

    _this.attachShadow({
      mode: 'open'
    });

    return _this;
  }

  _createClass(ExampleCardConfigEditor, [{
    key: "setConfig",
    value: function setConfig(config) {
      this.config = config;
      this.shadowRoot.innerHTML = this.render(config);
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      if (this.isConnected) {
        this.shadowRoot.addEventListener('change', this.handleChange, true);
        this.shadowRoot.addEventListener('click', this.handleClick, true);
      }
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.shadowRoot.removeEventListener('change', this.handleChange, true);
      this.shadowRoot.removeEventListener('click', this.handleClick, true);
    }
  }, {
    key: "render",
    value: function render() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.config;
      return "\n<paper-tabs selected=\"0\" scrollable>\n\t<paper-tab href=\"#tab-general\">General</paper-tab>\n\t<paper-tab href=\"#tab-design\">Design</paper-tab>\n\t<paper-tab href=\"#tab-bindings\">Bindings</paper-tab>\n\t<paper-tab href=\"#tab-actions\">Actions</paper-tab>\n</paper-tabs>\n<div id=\"tabs\">\n\t<div id=\"tab-general\">\n\t\t<paper-input label=\"Entity\" id=\"entity\" value=\"".concat(config.entity, "\"></paper-input>\n\t\t\n\t\t<br>\n\t\t<label>Import Design</label>\n\t\t<input label=\"Import Design\" id=\"import\" type=\"file\"></input>\n\t</div>\n\t<div id=\"tab-design\" hidden>\n\t\tGUI configuration for design \n\t\t<textarea label=\"content\" id=\"content\" rows=\"10\" style=\"width: 100%;\">").concat(config.content, "</textarea>\n\t</div>\n\t<div id=\"tab-bindings\" hidden>\n\t\tGUI configuration for bindings\n\t</div>\n\t<div id=\"tab-actions\" hidden>\n\t\tGUI configuration for actions \n\t</div>\n</div>\n\t\t");
    }
  }]);

  return ExampleCardConfigEditor;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

var ExampleCard = /*#__PURE__*/function (_HTMLElement2) {
  _inherits(ExampleCard, _HTMLElement2);

  var _super2 = _createSuper(ExampleCard);

  function ExampleCard() {
    var _this2;

    _classCallCheck(this, ExampleCard);

    _this2 = _super2.call(this);

    _defineProperty(_assertThisInitialized(_this2), "storedValues", []);

    _defineProperty(_assertThisInitialized(_this2), "handleAction", function (e) {
      var _assertThisInitialize = _assertThisInitialized(_this2),
          hass = _assertThisInitialize.hass,
          config = _assertThisInitialize.config;

      var entity_id = config.entity;

      var entity = _objectSpread({
        state: 'unavailable',
        attributes: {}
      }, hass.states[entity_id]);

      if (entity_id) {
        (function () {
          var _entity_id$split = entity_id.split('.'),
              _entity_id$split2 = _slicedToArray(_entity_id$split, 2),
              domain = _entity_id$split2[0],
              id = _entity_id$split2[1];

          var services = hass.services[domain];

          var _loop = function _loop(service) {
            entity[service] = function (data) {
              return hass.callService(domain, service, _objectSpread({
                entity_id: entity_id
              }, data));
            };
          };

          for (var service in services) {
            _loop(service);
          }
        })();
      }

      _this2.config.actions.forEach(function (_ref2) {
        var selector = _ref2.selector,
            type = _ref2.type,
            call = _ref2.call;
        if (!selector || !call || !type) return;
        var target = e.target.closest(selector);

        if (type === e.type && target) {
          try {
            var setState = new Function('hass', 'config', 'entity', call);
            setState.call(target, hass, config, entity);
          } catch (e) {}
        }
      });
    });

    _this2.attachShadow({
      mode: 'open'
    });

    return _this2;
  }

  _createClass(ExampleCard, [{
    key: "setConfig",
    value: function setConfig(config) {
      this.config = config;
      this.shadowRoot.innerHTML = config.content;
      this.storedValues = [];
    }
  }, {
    key: "renderState",
    value: function renderState() {
      var _this3 = this;

      var hass = this.hass,
          config = this.config;
      if (!hass || !config) return;
      var entity = hass.states[config.entity] || {
        state: 'unavailable',
        attributes: {}
      };
      this.config.bindings.forEach(function (_ref3, index) {
        var selector = _ref3.selector,
            type = _ref3.type,
            bind = _ref3.bind;
        if (!selector || !bind || !type) return;

        _this3.shadowRoot.querySelectorAll(selector).forEach(function (target) {
          var prevState = _this3.storedValues[index];
          var nextState = null;

          try {
            var getState = new Function('hass', 'config', 'entity', 'state', 'attr', bind);
            nextState = getState.call(target, hass, config, entity, entity.state, entity.attributes);
          } catch (e) {
            console.log('BINDING --> FAILED', bind);
          }

          if (prevState == null || nextState !== prevState) {
            switch (type) {
              case 'class':
                prevState && target.classList.remove(prevState);
                nextState && target.classList.add(nextState);
                break;

              case 'text':
                target.innerText = nextState;
                break;

              case 'html':
                target.innerHTML = nextState;
                break;

              case 'checked':
                target.checked = !!nextState;
                break;

              default:
                if (typeof nextState === 'undefined' || '' === "".concat(nextState)) {
                  target.removeAttribute(type);
                } else {
                  target.setAttribute(type, nextState);
                }

            }

            _this3.storedValues[index] = nextState;
          }
        });
      });
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      if (this.isConnected) {
        this.renderState();
        this.shadowRoot.addEventListener('change', this.handleAction, true);
        this.shadowRoot.addEventListener('click', this.handleAction, true);
      }
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.shadowRoot.removeEventListener('change', this.handleAction, true);
      this.shadowRoot.removeEventListener('click', this.handleAction, true);
    }
  }, {
    key: "hass",
    get: function get() {
      return this._hass;
    },
    set: function set(hass) {
      this._hass = hass;
      this.renderState();
    }
  }], [{
    key: "getConfigElement",
    value: function getConfigElement() {
      return document.createElement('example-card-config-editor');
    }
  }, {
    key: "getStubConfig",
    value: function getStubConfig() {
      return {
        entity: 'light.bedroom_light',
        content: '',
        actions: [],
        bindings: []
      };
    }
  }]);

  return ExampleCard;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define('example-card-config-editor', ExampleCardConfigEditor);
customElements.define('example-card', ExampleCard);
window.customCards = window.customCards || [];
window.customCards.push({
  type: 'example-card',
  name: 'Example Card'
});
console.log('Custom Element: EXAMPLE-CARD.');

/***/ })
/******/ ]);