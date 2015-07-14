function moveCircle() {
	var constants = {
		circleRadius: 50,
		circleColor: 'red'
	}

	var canvas = document.getElementById('task-2');
	var context = canvas.getContext('2d');
	context.fillStyle = 'red';

	function drawCircle(x, y, xIncrement, yIncrement) {
		var radius = constants.circleRadius;
		var top = 0,
			bottom = canvas.height,
			left = 0,
			right = canvas.width;

		context.clearRect(0, 0, canvas.width, canvas.height);

		if ((x - radius) <= left || right <= (x + radius)) {
		    xIncrement *= -1;
		}

		if (y - radius <= top || bottom <= y + radius) {
		    yIncrement *= -1;
		}

		x += xIncrement;
		y += yIncrement;

		context.beginPath();
		context.arc(x, y, radius, 0, 2 * Math.PI, false);
		context.fill();
		context.stroke();
		context.restore();

		setTimeout(drawCircle, 10, x, y, xIncrement, yIncrement);
	}

	drawCircle(100, 200, 5, 8);

	return
}

moveCircle();