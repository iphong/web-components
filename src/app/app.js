customElements.define('lovelace-builder-graphic', class extends HTMLElement {
	events = {
		'mousedown': 'handleMouseDown'
	}

	constructor() {
		super()
		top.app = this
		this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
		this.svg.setAttribute('viewBox', '0 0 100 100')
		this.svg.setAttribute('width', '400')
		this.svg.style.background = 'lightcoral'
		this.attachShadow({ mode: 'open' }).appendChild(this.svg)

	}

	create = (type = 'g', attrs = {}, content = '') => {
		const elem = document.createElementNS('http://www.w3.org/2000/svg', type)
		for (let name in attrs)
			elem.setAttribute(name, attrs[name])
		elem.innerHTML = content
		this.svg.appendChild(elem)
		return elem
	}
	createText = (text, x = '50%', y = '50%', size = 10, fill = '#000') => {
		return this.create('text', {
			x,
			y,
			contentEditable: 'true',
			'font-size': size,
			'text-anchor': 'middle',
			'alignment-baseline': 'middle'
		}, text)
	}

	connectedCallback() {
		if (this.isConnected) {
			for (let event in this.events) {
				this.shadowRoot.addEventListener(event, this[this.events[event]], true)
			}
		}
	}

	disconnectedCallback() {
		for (let event in this.events) {
			this.shadowRoot.removeEventListener(event, this[this.events[event]], true)
		}
	}

	handleMouseDown = e => {
		console.log(e.target.closest(':not(text)'))
	}
})

customElements.define('lovelace-builder-toolbar', class extends HTMLElement {
	constructor() {
		super()
		this.attachShadow({ mode: 'open' }).innerHTML = `
<div>
	<button onclick="app.createText('Text')">Text</button>		
</div>
		`
	}
})


const pi = Math.PI
const cos = Math.cos
const sin = Math.sin
const atan2 = Math.atan2
const sqrt = Math.sqrt
const pow = Math.pow
const add = ([a1, a2], [b1, b2]) => [a1 + b1, a2 + b2]
const deg2rad = x => x * pi / 180
const rad2deg = x => 180 / pi * x
const getXY = (angle, radius) => [radius * cos(deg2rad(angle)), radius * -sin(deg2rad(angle))]

class Emitter {
	constructor(draw = () => {
	}) {
		this.draw = draw
		this.fps = 60
		this.timer = Date.now()
		this.particles = []
		for (let i = 0 ; i < 1 ; i++) {
			this.particles.push(new Particle(50, 50, 10))
		}
		this.loop()
	}

	loop() {
		requestAnimationFrame(() => {
			if ((Date.now() - this.timer) / 1000 >= 1 / this.fps) {
				for (let p of this.particles) {
					p.loop()
					this.draw(this.particles, this)
				}
				this.timer = Date.now()
			}
			this.loop()
		})
	}
}

function angleReflect(incidenceAngle, surfaceAngle) {
	const a = surfaceAngle * 2 - incidenceAngle
	return a >= 360 ? a - 360 : a < 0 ? a + 360 : a
}

class Particle {
	constructor(x = 0, y = 0, heading = 0, velocity = 10) {
		this.x = x
		this.y = y
		this.h = heading
		this.v = velocity
	}

	loop = () => {
		const [dx, dy] = getXY(this.h, this.v)
		this.x += dx
		this.y += dy
	}
	bounce = (x, y, w, h) => {
		if (this.x >= w) {
			this.x = h
			this.h = angleReflect(this.h, 180)
		}
		else if (this.x <= x) {
			this.x = x
			this.h = angleReflect(this.h, 180)
		}
		else if (this.y >= h) {
			this.y = y
			this.h = angleReflect(this.h, -90)
		} else if (this.y <= y) {
			this.y = y
			this.h = angleReflect(this.h, -90)
		}
	}
}

customElements.define('lovelace-builder-canvas', class extends HTMLElement {

	image = document.createElement('img')
	canvas = document.createElement('canvas')
	context = this.canvas.getContext('2d')

	constructor() {
		super()
		this.canvas.width = 400
		this.canvas.height = 400
		this.image.src = `https://i.imgur.com/95DrEMD.png`
		this.attachShadow({ mode: 'open' }).appendChild(this.canvas)
		new Emitter(this.render)
	}

	render = (particles) => {
		const ctx = this.context
		const [w, h] = [this.canvas.width, this.canvas.height]
		ctx.clearRect(0, 0, w, h)
		particles.forEach(p => {
			ctx.save()
			ctx.drawImage(this.image, p.x, p.y, 30, 30)
			ctx.restore()
			p.bounce(0, 0, w, h)
		})
	}
})


// top.e = new Emitter()
// top.p = new Particle(10, 10)