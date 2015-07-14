var drawPerson = function(x, y) {
	var canvas = document.getElementById('task-1'),
		context = canvas.getContext('2d'),
		posX = 0,
		posY = 0;

	function drawEye(posX, posY) {
		context.beginPath();
		context.ellipse(posX + x, posY + y, 10, 6, 0, 0, 2 * Math.PI);
		context.stroke();

		context.fillStyle = '#22545F';
		context.beginPath();
		context.ellipse(posX + x - 3, posY + y, 3, 6, 0, 0, 2 * Math.PI);
		context.fill();
	}

	function drawNose(posX, posY) {
		context.beginPath();
		context.moveTo(posX + x, posY + y);
		context.lineTo(posX + x - 15, posY + y + 25);
		context.lineTo(posX + x, posY + y + 25)
		context.stroke();
	}

	function drawMouth(posX, posY) {
		context.beginPath();
		context.ellipse(posX + x, posY + y, 20, 8, 0.05 * Math.PI, 0, 2 * Math.PI);
		context.stroke();
	}

	context.beginPath();
	context.fillStyle = '#90CAD7';
	context.ellipse(45 + x, 135 + y, 50, 50, 0, 0, 2 * Math.PI);
	context.fill();
	context.stroke();

	drawEye(15, 120);
	drawEye(55, 120);
	drawNose(35, 120);
	drawMouth(35, 160);

	context.fillStyle = '#396693';
	context.strokeStyle = '#231D17';

	context.beginPath();
	context.ellipse(45 + x, 20 + y, 32, 12, 0, 0, 2 * Math.PI);
	context.fill();
	context.stroke();

	context.beginPath();
	context.ellipse(45 + x, 90 + y, 70, 15, 0, -0.35 * Math.PI, 1.5 * Math.PI);
	context.fill();
	context.stroke();

	context.beginPath();
	context.ellipse(45 + x, 20 + y, 32, 12, 0, 0, 1 * Math.PI);
	context.ellipse(45 + x, 80 + y, 32, 12, 0, 1 * Math.PI, 0, true);
	context.lineTo(77 + x, 20 + y);
	context.fill();
	context.stroke();
}

var drawBike = function(x, y) {
	var canvas = document.getElementById('task-1');
	var context = canvas.getContext('2d');
	context.fillStyle = '#90CAD7';
	context.strokeStyle = '#348396';

	function drawTire(posX, posY) {
		context.beginPath();
		context.arc(posX + x, posY + y, 60, 0, 2 * Math.PI);
		context.fill();
		context.stroke();
	}

	function drawFrame(posX, posY) {
		var p1 = {
				x: posX + x,
				y: posY + y
			},
			p2 = {
				x: posX + x + 105,
				y: posY + y
			},
			p3 = {
				x: posX + x + 200,
				y: posY + y - 75
			},
			p4 = {
				x: posX + x + 60,
				y: posY + y - 75
			},
			p5 = {
				x: posX + x + 50,
				y: posY + y - 90
			},
			p6 = {
				x: x + posX + 220,
				y: posY + y
			},
			p7 = {
				x: x + posX + 195,
				y: posY + y - 100
			}

		context.beginPath();
		context.moveTo(p1.x, p1.y);
		context.lineTo(p2.x, p2.y);
		context.lineTo(p3.x, p3.y);
		context.lineTo(p4.x, p4.y);

		context.closePath();

		context.moveTo(p2.x, p2.y);
		context.lineTo(p5.x, p5.y);

		context.moveTo(p6.x, p6.y);
		context.lineTo(p7.x, p7.y);

		context.moveTo(p5.x - 10, p5.y);
		context.lineTo(p5.x + 10, p5.y);

		context.moveTo(p7.x, p7.y);
		context.lineTo(p7.x - 30, p7.y + 10);

		context.moveTo(p7.x, p7.y);
		context.lineTo(p7.x + 25, p7.y - 20);
		context.stroke();

		var drawPedal = (function() {
			context.beginPath();
			context.arc(p2.x, p2.y, 10, 0, 2 * Math.PI);
			context.moveTo(p2.x - 7, p2.y - 7);
			context.lineTo(p2.x - 15, p2.y - 15);
			context.moveTo(p2.x + 7, p2.y + 7);
			context.lineTo(p2.x + 15, p2.y + 15);

			context.stroke();


		})();
	}


	drawTire(x, 50 + y);
	drawTire(x + 220, 50 + y);
	drawFrame(x, y + 50);
}

var drawHouse = function(x, y) {
	var canvas = document.getElementById('task-1'),
		context = canvas.getContext('2d');

	function drawMainBody(posx, posy) {
		var p1 = {
				x: x + posx,
				y: y + posy
			},
			p2 = {
				x: p1.x,
				y: p1.y + 215
			},
			p3 = {
				x: p2.x + 290,
				y: p2.y
			},
			p4 = {
				x: p3.x,
				y: p1.y
			},
			p5 = {
				x: (p1.x + p4.x) / 2,
				y: (p1.y - 160)
			};

		context.strokeStyle = '#000000';
		context.fillStyle = '#975B5B';
		context.lineWidth = 3;

		context.beginPath();
		context.moveTo(p1.x, p1.y);
		context.lineTo(p2.x, p2.y);
		context.lineTo(p3.x, p3.y);
		context.lineTo(p4.x, p4.y);
		context.lineTo(p1.x, p1.y);

		context.moveTo(p1.x, p1.y);
		context.lineTo(p5.x, p5.y);
		context.lineTo(p4.x, p4.y);
		context.fill();
		context.stroke();
	}

	function drawWindow(posx, posy) {
		var width = 100,
			height = 70,
			quaterWidth = (width - 2) / 2,
			quaterHeight = (height - 2) / 2;

		context.fillStyle = '#000000';
		context.beginPath();
		context.fillRect(posx + x, posy + y, quaterWidth, quaterHeight);
		context.fillRect(posx + x + 2 + quaterWidth, posy + y, quaterWidth, quaterHeight);
		context.fillRect(posx + x, posy + y + 2 + quaterHeight, quaterWidth, quaterHeight);
		context.fillRect(posx + x + 2 + quaterWidth, posy + y + 2 + quaterHeight, quaterWidth, quaterHeight);


		context.fill();
	}

	function drawChimney(posx, posy) {
		var height = 60,
			width = 24;

		context.strokeStyle = '#000000';
		context.fillStyle = '#975B5B';

		context.fillStyle
		context.beginPath();
		context.fillRect(posx + x, posy + y - height, width, height);
		context.ellipse((posx + x) + width / 2, posy + y - height, width / 2, width / 8, 0, 0, 2 * Math.PI);
		context.stroke();
		context.fill();


		context.beginPath();
		context.moveTo(posx + x, posy + y);
		context.lineTo(posx + x, posy + y - height);
		context.moveTo(posx + x + width, posy + y);
		context.lineTo(posx + x + width, posy + y - height);
		context.stroke();
	}

	function drawDoor(posx, posy) {
		var width = 80,
			height = 80;
		p1 = {
			x: posx + x,
			y: posy + y
		},
		p2 = {
			x: p1.x + width,
			y: p1.y
		},
		p3 = {
			x: p2.x,
			y: p2.y - height
		},
		p4 = {
			x: p1.x,
			y: p1.y - height
		},
		p5 = {
			x: p1.x + width / 2,
			y: p4.y - width / 5
		},
		p6 = {
			x: p5.x,
			y: p1.y
		};

		context.strokeStyle = '#000000';
		context.fillStyle = '#975B5B';

		context.beginPath();
		context.moveTo(p4.x, p4.y);
		context.lineTo(p1.x, p1.y);
		context.lineTo(p2.x, p2.y);
		context.lineTo(p3.x, p3.y);
		context.moveTo(p6.x, p6.y);
		context.lineTo(p5.x, p5.y);
		context.moveTo(p4.x, p4.y)
		context.bezierCurveTo(p4.x, p4.y, p5.x, p5.y - 20, p3.x, p3.y);
		context.stroke();

		context.beginPath();
		context.ellipse(p6.x - width / 6, p6.y - height / 3, 3, 3, 0, 0, 2 * Math.PI);
		context.stroke();

		context.beginPath();
		context.ellipse(p6.x + width / 6, p6.y - height / 3, 3, 3, 0, 0, 2 * Math.PI);
		context.stroke();

	}

	drawMainBody(0, 0);
	drawWindow(20, 30);
	drawWindow(165, 30);
	drawWindow(165, 120);
	drawChimney(200, -60);
	drawDoor(30, 215);
}

drawPerson(50, 10);
drawBike(50, 150);
drawHouse(400, 200);
// debugger;