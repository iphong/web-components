!function (t) {
	function e(r) {
		if (n[r]) return n[r].exports
		var o = n[r] = { i: r, l: !1, exports: {} }
		return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports
	}
	var n = {}
	e.m = t, e.c = n, e.d = function (t, n, r) {
		e.o(t, n) || Object.defineProperty(t, n, { configurable: !1, enumerable: !0, get: r })
	}, e.n = function (t) {
		var n = t && t.__esModule ? function () {
			return t.default
		} : function () {
			return t
		}
		return e.d(n, 'a', n), n
	}, e.o = function (t, e) {
		return Object.prototype.hasOwnProperty.call(t, e)
	}, e.p = '', e(e.s = 0)
}([function (t, e) {
	function n(t, e) {
		return i(t) || o(t, e) || u(t, e) || r()
	}
	function r() {
		throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
	}
	function o(t, e) {
		if ('undefined' != typeof Symbol && Symbol.iterator in Object(t)) {
			var n = [], r = !0, o = !1, i = void 0
			try {
				for (var a, c = t[Symbol.iterator]() ; !(r = (a = c.next()).done) && (n.push(a.value), !e || n.length !== e) ; r = !0)
			} catch (t) {
				o = !0, i = t
			} finally {
				try {
					r || null == c.return || c.return()
				} finally {
					if (o) throw i
				}
			}
			return n
		}
	}
	function i(t) {
		if (Array.isArray(t)) return t
	}
	function a(t) {
		'@babel/helpers - typeof'
		return (a = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
			return typeof t
		} : function (t) {
			return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t
		})(t)
	}
	function c(t, e) {
		var n
		if ('undefined' == typeof Symbol || null == t[Symbol.iterator]) {
			if (Array.isArray(t) || (n = u(t)) || e && t && 'number' == typeof t.length) {
				n && (t = n)
				var r = 0, o = function () {
				}
				return {
					s: o, n: function () {
						return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] }
					}, e: function (t) {
						throw t
					}, f: o
				}
			}
			throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
		}
		var i, a = !0, c = !1
		return {
			s: function () {
				n = t[Symbol.iterator]()
			}, n: function () {
				var t = n.next()
				return a = t.done, t
			}, e: function (t) {
				c = !0, i = t
			}, f: function () {
				try {
					a || null == n.return || n.return()
				} finally {
					if (c) throw i
				}
			}
		}
	}
	function u(t, e) {
		if (t) {
			if ('string' == typeof t) return s(t, e)
			var n = Object.prototype.toString.call(t).slice(8, -1)
			return 'Object' === n && t.constructor && (n = t.constructor.name), 'Map' === n || 'Set' === n ? Array.from(t) : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? s(t, e) : void 0
		}
	}
	function s(t, e) {
		(null == e || e > t.length) && (e = t.length)
		for (var n = 0, r = new Array(e) ; n < e ; n++) r[n] = t[n]
		return r
	}
	function l(t, e) {
		var n = Object.keys(t)
		if (Object.getOwnPropertySymbols) {
			var r = Object.getOwnPropertySymbols(t)
			e && (r = r.filter(function (e) {
				return Object.getOwnPropertyDescriptor(t, e).enumerable
			})), n.push.apply(n, r)
		}
		return n
	}
	function f(t) {
		for (var e = 1 ; e < arguments.length ; e++) {
			var n = null != arguments[e] ? arguments[e] : {}
			e % 2 ? l(Object(n), !0).forEach(function (e) {
				C(t, e, n[e])
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach(function (e) {
				Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
			})
		}
		return t
	}
	function d(t, e, n, r, o, i, a) {
		try {
			var c = t[i](a), u = c.value
		} catch (t) {
			return void n(t)
		}
		c.done ? e(u) : Promise.resolve(u).then(r, o)
	}
	function h(t) {
		return function () {
			var e = this, n = arguments
			return new Promise(function (r, o) {
				function i(t) {
					d(c, r, o, i, a, 'next', t)
				}
				function a(t) {
					d(c, r, o, i, a, 'throw', t)
				}
				var c = t.apply(e, n)
				i(void 0)
			})
		}
	}
	function p(t, e) {
		if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
	}
	function b(t, e) {
		for (var n = 0 ; n < e.length ; n++) {
			var r = e[n]
			r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
		}
	}
	function y(t, e, n) {
		return e && b(t.prototype, e), n && b(t, n), t
	}
	function v(t, e) {
		if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function')
		t.prototype = Object.create(e && e.prototype, {
			constructor: {
				value: t,
				writable: !0,
				configurable: !0
			}
		}), e && A(t, e)
	}
	function g(t) {
		var e = k()
		return function () {
			var n, r = j(t)
			if (e) {
				var o = j(this).constructor
				n = Reflect.construct(r, arguments, o)
			} else n = r.apply(this, arguments)
			return m(this, n)
		}
	}
	function m(t, e) {
		return !e || 'object' !== a(e) && 'function' != typeof e ? w(t) : e
	}
	function w(t) {
		if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
		return t
	}
	function O(t) {
		var e = 'function' == typeof Map ? new Map : void 0
		return (O = function (t) {
			function n() {
				return E(t, arguments, j(this).constructor)
			}
			if (null === t || !S(t)) return t
			if ('function' != typeof t) throw new TypeError('Super expression must either be null or a function')
			if (void 0 !== e) {
				if (e.has(t)) return e.get(t)
				e.set(t, n)
			}
			return n.prototype = Object.create(t.prototype, {
				constructor: {
					value: n,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), A(n, t)
		})(t)
	}
	function E(t, e, n) {
		return E = k() ? Reflect.construct : function (t, e, n) {
			var r = [null]
			r.push.apply(r, e)
			var o = Function.bind.apply(t, r), i = new o
			return n && A(i, n.prototype), i
		}, E.apply(null, arguments)
	}
	function k() {
		if ('undefined' == typeof Reflect || !Reflect.construct) return !1
		if (Reflect.construct.sham) return !1
		if ('function' == typeof Proxy) return !0
		try {
			return Date.prototype.toString.call(Reflect.construct(Date, [], function () {
			})), !0
		} catch (t) {
			return !1
		}
	}
	function S(t) {
		return -1 !== Function.toString.call(t).indexOf('[native code]')
	}
	function A(t, e) {
		return (A = Object.setPrototypeOf || function (t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}
	function j(t) {
		return (j = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		})(t)
	}
	function C(t, e, n) {
		return e in t ? Object.defineProperty(t, e, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : t[e] = n, t
	}
	var R = function (t) {
		function e() {
			var t
			return p(this, e), t = n.call(this), C(w(t), 'handleChange', function () {
				var e = h(regeneratorRuntime.mark(function e(n) {
					var r, o, i
					return regeneratorRuntime.wrap(function (e) {
						for (; ;) switch (e.prev = e.next) {
							case 0:
								if (r = new Event('config-changed', {
									bubbles: !0,
									composed: !0
								}), r.detail = { config: f({}, t.config) }, 'file' !== n.target.getAttribute('type')) {
									e.next = 10
									break
								}
								return o = n.target.id, i = new FileReader, e.next = 7, i.readAsText(n.target.files[0])
							case 7:
								i.addEventListener('loadend', function (e) {
									e.target.value = '', r.detail.config[o] = i.result, t.dispatchEvent(r)
								}), e.next = 12
								break
							case 10:
								r.detail.config[n.target.id] = n.target.value, t.dispatchEvent(r)
							case 12:
							case'end':
								return e.stop()
						}
					}, e)
				}))
				return function (t) {
					return e.apply(this, arguments)
				}
			}()), C(w(t), 'handleClick', function (e) {
				if (e.target.hasAttribute('upload')) t.shadowRoot.querySelector('#'.concat(e.target.getAttribute('upload'))).click() else {
					var n = e.target.closest('paper-tab')
					if (n) {
						var r = n.getAttribute('href')
						t.shadowRoot.querySelectorAll(r).forEach(function (t) {
							var e, n = c(t.parentNode.children)
							try {
								for (n.s() ; !(e = n.n()).done ;) {
									e.value.setAttribute('hidden', 'true')
								}
							} catch (t) {
								n.e(t)
							} finally {
								n.f()
							}
							t.removeAttribute('hidden')
						})
					}
				}
			}), t.attachShadow({ mode: 'open' }), t
		}
		v(e, t)
		var n = g(e)
		return y(e, [{
			key: 'setConfig', value: function (t) {
				this.config = t, this.shadowRoot.innerHTML = this.render(t)
			}
		}, {
			key: 'connectedCallback', value: function () {
				this.isConnected && (this.shadowRoot.addEventListener('change', this.handleChange, !0), this.shadowRoot.addEventListener('click', this.handleClick, !0))
			}
		}, {
			key: 'disconnectedCallback', value: function () {
				this.shadowRoot.removeEventListener('change', this.handleChange, !0), this.shadowRoot.removeEventListener('click', this.handleClick, !0)
			}
		}, {
			key: 'render', value: function () {
				return '\n\t\t\t<paper-tabs selected="0" scrollable>\n\t\t\t\t<paper-tab href="#tab-general">General</paper-tab>\n\t\t\t\t<paper-tab href="#tab-bindings">Bindings</paper-tab>\n\t\t\t\t<paper-tab href="#tab-actions">Actions</paper-tab>\n\t\t\t</paper-tabs>\n\t\t\t<div id="tabs">\n\t\t\t\t<div id="tab-general">\n\t\t\t\t\t<paper-input label="Entity" id="entity" placeholder="Enter entity ID" value="'.concat((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.config).entity, '"></paper-input>\n\t\t\t\t\t<p>Once entity is declared. You can access it using variable \'entity\' in actions and bindings.</p>\n\t\t\t\t\t<h3>Import / Export</h3>\n\t\t\t\t\t<mwc-button unelevated upload="content">Upload Design</mwc-button>\n\t\t\t\t\t<input id="content" type="file" hidden />\n\t\t\t\t\t<mwc-button unelevated>Export</mwc-button>\n\t\t\t\t\t<mwc-button unelevated>Import</mwc-button>\n\t\t\t\t</div>\n\t\t\t\t<div id="tab-bindings" hidden>\n\t\t\t\t\tGUI configuration for bindings\n\t\t\t\t</div>\n\t\t\t\t<div id="tab-actions" hidden>\n\t\t\t\t\tGUI configuration for actions \n\t\t\t\t</div>\n\t\t\t</div>\n\t\t')
			}
		}]), e
	}(O(HTMLElement)), x = function (t) {
		function e() {
			var t
			return p(this, e), t = r.call(this), C(w(t), 'storedValues', []), C(w(t), 'handleAction', function (e) {
				var r = w(t), o = r.hass, i = r.config, a = i.entity,
					c = f({ state: 'unavailable', attributes: {} }, o.states[a])
				a && function () {
					var t = a.split('.'), e = n(t, 2), r = e[0], i = (e[1], o.services[r])
					for (var u in i) !function (t) {
						c[t] = function (e) {
							return o.callService(r, t, f({ entity_id: a }, e))
						}
					}(u)
				}(), t.config.actions.forEach(function (t) {
					var n = t.selector, r = t.type, a = t.action
					if (n && a && r) {
						var u = e.target.closest(n)
						if (r === e.type && u) try {
							new Function('hass', 'config', 'entity', a).call(u, o, i, c)
						} catch (t) {
						}
					}
				})
			}), t.attachShadow({ mode: 'open' }), t
		}
		v(e, t)
		var r = g(e)
		return y(e, [{
			key: 'setConfig', value: function (t) {
				this.config = t, this.shadowRoot.innerHTML = t.content, this.storedValues = []
			}
		}, {
			key: 'renderState', value: function () {
				var t = this, e = this.hass, n = this.config
				if (e && n) {
					var r = e.states[n.entity] || { state: 'unavailable', attributes: {} }
					this.config.bindings.forEach(function (o, i) {
						var a = o.selector, c = o.type, u = o.bind
						a && u && c && t.shadowRoot.querySelectorAll(a).forEach(function (o) {
							var a = t.storedValues[i], s = null
							try {
								s = new Function('hass', 'config', 'entity', 'state', 'attr', u).call(o, e, n, r, r.state, r.attributes)
							} catch (t) {
								console.log('BINDING --\x3e FAILED', u)
							}
							if (null == a || s !== a) {
								switch (c) {
									case'class':
										a && o.classList.remove(a), s && o.classList.add(s)
										break
									case'text':
										o.innerText = s
										break
									case'html':
										o.innerHTML = s
										break
									case'checked':
										o.checked = !!s
										break
									default:
										void 0 === s || '' === ''.concat(s) ? o.removeAttribute(c) : o.setAttribute(c, s)
								}
								t.storedValues[i] = s
							}
						})
					})
				}
			}
		}, {
			key: 'connectedCallback', value: function () {
				this.isConnected && (this.renderState(), this.shadowRoot.addEventListener('change', this.handleAction, !0), this.shadowRoot.addEventListener('click', this.handleAction, !0))
			}
		}, {
			key: 'disconnectedCallback', value: function () {
				this.shadowRoot.removeEventListener('change', this.handleAction, !0), this.shadowRoot.removeEventListener('click', this.handleAction, !0)
			}
		}, {
			key: 'hass', get: function () {
				return this._hass
			}, set: function (t) {
				window.hass = t, this._hass = t, this.renderState()
			}
		}], [{
			key: 'getConfigElement', value: function () {
				return document.createElement('dynamic-card-config-editor')
			}
		}, {
			key: 'getStubConfig', value: function () {
				return { entity: '', content: '', actions: [], bindings: [] }
			}
		}]), e
	}(O(HTMLElement))
	customElements.define('dynamic-card-config-editor', R), customElements.define('dynamic-card', x), window.customCards = window.customCards || [], window.customCards.push({
		type: 'dynamic-card',
		name: 'Dynamic Card'
	}), console.log('Custom Element: DYNAMIC-CARD.')
}])