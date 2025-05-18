/**
 * Stars
 * Inspired by Steve Courtney's poster art for Celsius GS's Drifter - http://celsiusgs.com/drifter/posters.php
 * by Cory Hughart - http://coryhughart.com
 * Modified for Petrafied.ink
 */

// Settings
var particleCount = 40,
	flareCount = 10,
	motion = 0.05,
	tilt = 0.05,
	color = '#9882d9', // Main purple color from the site
	particleSizeBase = 1,
	particleSizeMultiplier = 0.5,
	flareSizeBase = 100,
	flareSizeMultiplier = 100,
	lineWidth = 1,
	linkChance = 75,
	linkLengthMin = 5,
	linkLengthMax = 7,
	linkOpacity = 0.25,
	linkFade = 90,
	linkSpeed = 1,
	glareAngle = -60,
	glareOpacityMultiplier = 0.05,
	renderParticles = true,
	renderParticleGlare = true,
	renderFlares = true,
	renderLinks = true,
	renderMesh = false,
	flicker = true,
	flickerSmoothing = 15,
	blurSize = 0,
	orbitTilt = true,
	randomMotion = true,
	noiseLength = 1000,
	noiseStrength = 1;

var canvas,
	context,
	mouse = { x: 0, y: 0 },
	m = {},
	r = 0,
	c = 1000, // multiplier for delaunay points
	n = 0,
	nAngle = (Math.PI * 2) / noiseLength,
	nRad = 100,
	nScale = 0.5,
	nPos = {x: 0, y: 0},
	points = [],
	vertices = [],
	triangles = [],
	links = [],
	particles = [],
	flares = [];

function initStars() {
	// Create canvas element
	canvas = document.createElement('canvas');
	canvas.id = 'stars';
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	document.body.insertBefore(canvas, document.body.firstChild);
	context = canvas.getContext('2d');

	// requestAnimFrame polyfill
	window.requestAnimFrame = (function(){
		return  window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				function( callback ){
					window.setTimeout(callback, 1000 / 60);
				};
	})();

	// Size canvas
	resize();

	mouse.x = canvas.clientWidth / 2;
	mouse.y = canvas.clientHeight / 2;

	// Create particle positions
	for (i = 0; i < particleCount; i++) {
		var p = new Particle();
		particles.push(p);
		points.push([p.x*c, p.y*c]);
	}

	// Delaunay triangulation
	vertices = Delaunay.triangulate(points);
	//console.log(JSON.stringify(vertices));
	// Create an array of "triangles" (groups of 3 indices)
	var trianglesList = [];
	for (i = 0; i < vertices.length; i += 3) {
		trianglesList.push([vertices[i], vertices[i+1], vertices[i+2]]);
	}

	// Create flares
	for (i = 0; i < flareCount; i++) {
		flares.push(new Flare());
	}

	// Motion mode
	//if (randomMotion) {
	//	for (i = 0; i < particleCount; i++) {
	//		particles[i].ox = particles[i].x;
	//		particles[i].oy = particles[i].y;
	//		particles[i].vx = rand(-0.5,0.5);
	//		particles[i].vy = rand(-0.5,0.5);
	//		particles[i].life = rand(1, 10);
	//	}
	//}

	// Event listeners
	window.addEventListener('mousemove', function(e){
		mouse.x = e.clientX;
		mouse.y = e.clientY;
	});

	window.addEventListener('resize', function(e){
		resize();
	});

	// Animation loop
	animateStars();
}

function resize() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	// Reset particles
	points = [];
	vertices = [];
	links = [];
	particles = [];
	flares = [];

	// Create particle positions
	for (var i = 0; i < particleCount; i++) {
		var p = new Particle();
		particles.push(p);
		points.push([p.x*c, p.y*c]);
	}

	// Delaunay triangulation
	vertices = Delaunay.triangulate(points);

	// Create flares
	for (var i = 0; i < flareCount; i++) {
		flares.push(new Flare());
	}
}

function animateStars() {
	if (randomMotion) {
		n++;
		if (n >= noiseLength) {
			n = 0;
		}
		
		nPos.x = Math.cos(nAngle * n) * nRad;
		nPos.y = Math.sin(nAngle * n) * nRad;
	}
	
	// Clear
	context.clearRect(0, 0, canvas.width, canvas.height);
	
	// Move points
	for (var i = 0; i < particleCount; i++) {
		// Move point
		particles[i].move();
		
		// Reset points to opposite sides of screen
		if (particles[i].x < -0.1) particles[i].x = 1.1;
		if (particles[i].x > 1.1) particles[i].x = -0.1;
		if (particles[i].y < -0.1) particles[i].y = 1.1;
		if (particles[i].y > 1.1) particles[i].y = -0.1;
		
		// Update vertices
		points[i][0] = particles[i].x * c;
		points[i][1] = particles[i].y * c;
	}
	
	// Delaunay triangulation
	vertices = Delaunay.triangulate(points);

	// Render
	render();
	
	// Repeat
	requestAnimFrame(animateStars);
}

function render() {
	// Render triangles
	if (renderMesh) {
		context.beginPath();
		for (i = 0; i < vertices.length; i += 3) {
			var p1 = particles[vertices[i]],
				p2 = particles[vertices[i+1]],
				p3 = particles[vertices[i+2]];
			
			context.moveTo(p1.x * canvas.width, p1.y * canvas.height);
			context.lineTo(p2.x * canvas.width, p2.y * canvas.height);
			context.lineTo(p3.x * canvas.width, p3.y * canvas.height);
		}
		context.closePath();
		context.stroke();
	}
	
	// Render links
	if (renderLinks) {
		// Load previous links
		if (links.length > 0) {
			for (i = 0; i < links.length; i++) {
				var alpha = links[i].alpha,
					alpha_decay = alpha - (1/linkFade);
				
				if (alpha_decay > 0) {
					links[i].alpha = alpha_decay;
					links[i].draw();
				} else {
					delete links[i];
				}
			}
		}
		
		// Create new links
		var p1, p2,
			href,
			r = Math.floor(rand(0, vertices.length-3));
			
		p1 = particles[vertices[r]];
		p2 = particles[vertices[r+1]];
		href = rand(linkLengthMin, linkLengthMax);
		
		if (Math.random() > 1 - 1/linkChance) {
			links.push(new Link(p1, p2, href));
		}
	}
	
	// Render particles
	if (renderParticles) {
		for (i = 0; i < particleCount; i++) {
			particles[i].render();
		}
	}
	
	// Render flares
	if (renderFlares) {
		for (i = 0; i < flareCount; i++) {
			flares[i].render();
		}
	}
}

function Particle() {
	this.x = rand(0, 1);
	this.y = rand(0, 1);
	this.ox = this.x;
	this.oy = this.y;
	this.vx = 0;
	this.vy = 0;
	this.opacity = rand(0.3, 1);
	this.life = 1;
	
	this.move = function() {
		if (randomMotion) {
			this.vx += (rand(-motion, motion) + (nPos.x - 0.5) * noiseStrength) * this.life;
			this.vy += (rand(-motion, motion) + (nPos.y - 0.5) * noiseStrength) * this.life;
		} else {
			if (!orbitTilt) {
				this.vx += (mouse.x * motion) * this.life;
				this.vy += (mouse.y * motion) * this.life;
			} else {
				this.vx += (mouse.x * motion) * (-(this.y - 0.5) * tilt) * this.life;
				this.vy += (mouse.y * motion) * (-(this.x - 0.5) * tilt) * this.life;
			}
		}
		
		this.vx *= 0.9;
		this.vy *= 0.9;
		
		this.x += this.vx;
		this.y += this.vy;
		
		if (this.life > 0) this.life -= 0.01;
		if (this.life < 0) this.life = 0;
		
		if (this.opacity > 0) this.opacity -= 0.003;
		if (this.opacity < 0) this.opacity = 0;
	}
	
	this.render = function() {
		var size = particleSizeBase + (particleSizeMultiplier * this.life);
			
		context.beginPath();
		context.fillStyle = color + ',' + (this.opacity * (renderParticleGlare ? 1 : glareOpacityMultiplier)) + ')';
		context.arc(this.x * canvas.width, this.y * canvas.height, size, 0, Math.PI * 2, false);
		context.fill();
		
		if (renderParticleGlare) {
			context.beginPath();
			var grd = context.createRadialGradient(this.x * canvas.width, this.y * canvas.height, 0, this.x * canvas.width, this.y * canvas.height, (size + blurSize));
			grd.addColorStop(0, color + ',' + this.opacity + ')');
			grd.addColorStop(1, color + ',0)');
			context.fillStyle = grd;
			context.arc(this.x * canvas.width, this.y * canvas.height, (size + blurSize), 0, Math.PI * 2, false);
			context.fill();
		}
		
		if (flicker) flicker_opacity = rand(this.opacity - flickerSmoothing, this.opacity + flickerSmoothing);
		else flicker_opacity = this.opacity;
	}
}

function Flare() {
	this.x = rand(-0.25, 1.25);
	this.y = rand(-0.25, 1.25);
	this.opacity = rand(0.001, 0.01);
	
	this.render = function() {
		var x = this.x * canvas.width,
			y = this.y * canvas.height,
			size = flareSizeBase + (flareSizeMultiplier * Math.random());
			
		context.beginPath();
		context.globalAlpha = this.opacity;
		context.arc(x, y, size, 0, Math.PI * 2, false);
		context.fillStyle = color;
		context.fill();
		context.globalAlpha = 1;
	}
}

function Link(p1, p2, href) {
	this.p1 = p1;
	this.p2 = p2;
	this.href = href;
	this.alpha = linkOpacity;

	this.draw = function() {
		context.beginPath();
		context.globalAlpha = this.alpha;
		context.lineWidth = lineWidth;
		context.strokeStyle = color;
		context.moveTo(this.p1.x * canvas.width, this.p1.y * canvas.height);
		context.lineTo(this.p2.x * canvas.width, this.p2.y * canvas.height);
		context.stroke();
		context.globalAlpha = 1;
	}
}

function rand(min, max) {
	return Math.random() * (max - min) + min;
}

// Wait for Delaunay library to load before initializing
document.addEventListener('DOMContentLoaded', function() {
	// Check if Delaunay is loaded
	if (typeof Delaunay !== 'undefined') {
		initStars();
	} else {
		// If not loaded, load it dynamically
		var script = document.createElement('script');
		script.src = 'https://cdnjs.cloudflare.com/ajax/libs/delaunay-fast/1.0.1/delaunay.min.js';
		script.onload = function() {
			initStars();
		};
		document.head.appendChild(script);
	}
});
