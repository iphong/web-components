// noinspection CssUnresolvedCustomProperty
const tmpl = `
<style type="text/css">
:host {
	--ui-round-slider-track-color: #717171;
	--ui-round-slider-track-width: 3px;
	display: block;
}
svg {
	max-height: 100%;
	max-width: 100%;
}
svg * {
	vector-effect: non-scaling-stroke;
}
text {
    font-size: 20px;
    text-anchor: middle;
    alignment-baseline: middle;
}
path {
	fill: none;
	stroke: var(--ui-round-slider-track-color);
	stroke-width: var(--ui-round-slider-track-width);
}
circle {
	fill: var(--ui-round-slider-track-color);
}
</style>
<svg viewBox="0 0 100 100">
	<path d="M 24.288495612538433 80.64177772475912 A 40 40 90 1 1 75.71150438746159 80.64177772475911"></path>
	<path id="track" d=""></path>
	<circle id="handle" r="4" cx="50" cy="50"></circle>
	<text x="50" y="50"></text>
</svg>
`
const pi = Math.PI
const cos = Math.cos
const sin = Math.sin
const atan2 = Math.atan2
const sqrt = Math.sqrt
const pow = Math.pow

const add = ([a1, a2], [b1, b2]) => [a1 + b1, a2 + b2]
const multiply = ([[a, b], [c, d]], [x, y]) => [a * x + b * y, c * x + d * y]
const rotation = x => [[cos(x), -sin(x)], [sin(x), cos(x)]]
const constrain = (x, min, max) => typeof x !== 'number' || x === NaN || x < min ? min : x > max ? max : x

const deg2rad = x => x * pi / 180
const rad2deg = x => 180 / pi * x

const vector2position = (angle, radius) => [radius * cos(deg2rad(angle)), radius * -sin(deg2rad(angle))]
const position2vector = (x, y) => [rad2deg(atan2(y, x)), sqrt(pow(x, 2) + pow(y, 2))]

const arc = (cx, cy, radius, start, sweep, rotate) => {

	start = deg2rad(start)
	sweep = deg2rad(sweep) % (2 * pi)
	rotate = deg2rad(rotate)

	const matrix = rotation(rotate)

	const [x1, y1] = add(multiply(matrix, [radius * cos(start), radius * sin(start)]), [cx, cy])
	const [x2, y2] = add(multiply(matrix, [radius * cos(start + sweep), radius * sin(start + sweep)]), [cx, cy])

	const a = rotate / (2 * pi) * 360
	const b = sweep > pi ? 1 : 0
	const c = sweep > 0 ? 1 : 0

	return {
		path: ['M', x1, y1, 'A', radius, radius, a, b, c, x2, y2].join(' '),
		start: [x1, y1],
		end: [x2, y2]
	}
}

let EVT_START, EVT_MOVE, EVT_CANCEL, EVT_END

try {
	// document.createEvent('TouchEvent')
	EVT_START = 'touchstart'
	EVT_MOVE = 'touchmove'
	EVT_CANCEL = 'touchcancel'
	EVT_END = 'touchend'
	console.log('Touch device detected.')
} catch (e) {
	EVT_START = 'pointerdown'
	EVT_MOVE = 'pointermove'
	EVT_CANCEL = 'pointercancel'
	EVT_END = 'pointerup'
	console.log('No touch device found')
}

class TouchSlider extends HTMLElement {
	static get observedAttributes() {
		return ['value', 'min', 'max', 'step', 'track:color', 'value:text']
	}

	get min() {
		return this.hasAttribute('min') ? this.getAttribute('min') : 0
		return parseFloat(this.getAttribute('min') || '0')
	}

	set min(value) {
		this.setAttribute('min', value)
	}

	get max() {
		return this.hasAttribute('max') ? this.getAttribute('max') : 100
		return parseFloat(this.getAttribute('max') || '100')
	}

	set max(value) {
		this.setAttribute('max', value)
	}

	get step() {
		return this.hasAttribute('step') ? this.getAttribute('step') : 1
		return parseFloat(this.getAttribute('step') || '1')
	}

	set step(value) {
		this.setAttribute('step', value)
	}

	get range() {
		return this.max - this.min
	}

	get value() {
		return this.getAttribute('value') || 0
	}

	set value(value) {
		this.setValue(value)
	}

	setValue(value) {
		value == undefined ? this.removeAttribute('value') :
		this.setAttribute('value', value)
		this.render()
	}

	constructor(props) {
		super(props)
		this.attachShadow({ mode: 'open' }).innerHTML = tmpl
		this.$svg = this.shadowRoot.querySelector('svg')
		this.$text = this.shadowRoot.querySelector('text')
		this.$handle = this.shadowRoot.getElementById('handle')
		this.$track = this.shadowRoot.getElementById('track')
	}

	connectedCallback() {
		if (this.isConnected) {
			this.shadowRoot.addEventListener(EVT_START, this.onTouchStart, true)
		}
	}

	disconnectedCallback() {
		this.shadowRoot.removeEventListener(EVT_START, this.onTouchStart, true)
	}

	attributeChangedCallback() {
		setTimeout(this.render)
	}
	lastChangedValue = null
	onTouchStart = (e) => {
		const box = this.bounds = this.$svg.getBoundingClientRect()
		const ptr = e.touches ? e.touches[0] : e
		const [x, y] = [
			(ptr.clientX - box.left) / box.width * 100 - 50,
			(ptr.clientY - box.top) / box.height * 100 - 50
		]
		const [, radius] = position2vector(x, y)
		if ((e.button == 0 || e.touches) && radius > 35 && radius < 45 && e.target.closest('svg')) {
			this.dragging = true
			top.addEventListener(EVT_MOVE, this.onTouchMove, true)
			top.addEventListener(EVT_CANCEL, this.onTouchEnd, true)
			top.addEventListener(EVT_END, this.onTouchEnd, true)
			e.stopPropagation()
			e.preventDefault()
		}
	}
	onTouchMove = e => {
		if (this.dragging && this.bounds) {
			const box = this.bounds
			const ptr = e.touches ? e.touches[0] : e
			const [x, y] = [
				(ptr.clientX - box.left) / box.width * 100 - 50,
				(ptr.clientY - box.top) / box.height * 100 - 50
			]
			let [angle] = position2vector(x, y)
			angle = angle - 90
			if (angle < 0) angle = 360 + angle
			if (angle >= 35 && angle <= 325) {
				if (angle < 40) angle = 40
				if (angle > 320) angle = 320
				angle = (angle - 40) / (320 - 40) * this.range
				this.lastChangedValue = Math.round((angle + this.min) / this.step) * this.step
				this.render(this.lastChangedValue)
			}
		}
	}
	onTouchEnd = e => {
		this.dragging = false
		if (this.lastChangedValue !== null) {
			this.setAttribute('value', this.lastChangedValue)
			this.lastChangedValue = null
		}
		top.removeEventListener(EVT_MOVE, this.onTouchMove, true)
		top.removeEventListener(EVT_CANCEL, this.onTouchEnd, true)
		top.removeEventListener(EVT_END, this.onTouchEnd, true)
		this.dispatchEvent(new Event('change'))
	}

	render = (value = this.value) => {
		const start = 40
		const sweep = (value - this.min) / this.range * 280
		const { path, end: [x, y] } = arc(50, 50, 40, start, sweep, 90)
		const trackColor = this.getAttribute('track:color') || undefined
		if (this.$handle) {
			this.$handle.setAttribute('cx', x)
			this.$handle.setAttribute('cy', y)
			this.$handle.style.fill = trackColor
		}
		if (this.$track) {
			this.$track.setAttribute('d', path)
			this.$track.style.stroke = trackColor
		}
		if (this.$text) {
			this.$text.innerHTML = this.getAttribute('value:text')
		}
	}
}
customElements.define('ui-round-slider', TouchSlider)