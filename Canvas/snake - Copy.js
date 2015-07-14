var constants = {
    SnakeColor: 'blue',
    SnakeElementSize: 20,
    SnakeBorderColor: 'red',
    SnakeInitialPosition: { x: 150, y: 150 }
};

var directions = {
    up: 'up',
    down: 'down',
    right: 'right',
    left: 'left'
}

var canvas = document.getElementById('game-window');
var ctx = canvas.getContext('2d');

var Snake = (function () {
    var Snake = {
        init: function (x, y) {
            var size = constants.SnakeElementSize;

            this.body = [SnakeElement.get(x, y, 'blue'),
            SnakeElement.get(x - 1 * size, y, 'red'),
            SnakeElement.get(x - 2 * size, y, 'red'),
            SnakeElement.get(x - 3 * size, y, 'red'),
            SnakeElement.get(x - 4 * size, y, 'red')
            ];

            this.direction = directions.right;

            return this;
        },
        draw: function () {
            for (var i in this.body) {
                this.body[i].draw();
            }
        },
        moveUp: function () {
            this.goToPosition(this.body[0].x, this.body[0].y - constants.SnakeElementSize);
        },
        moveDown: function () {
            this.goToPosition(this.body[0].x, this.body[0].y + constants.SnakeElementSize);
        },
        moveLeft: function () {
            this.goToPosition(this.body[0].x - constants.SnakeElementSize, this.body[0].y);
        },
        moveRight: function () {
            this.goToPosition(this.body[0].x + constants.SnakeElementSize, this.body[0].y);
        },
        move: function () {
            switch (this.direction) {
                case directions.up:
                    this.moveUp();
                    break;
                case directions.down:
                    this.moveDown();
                    break;
                case directions.right:
                    this.moveRight();
                    break;
                case directions.left:
                    this.moveLeft();
                    break;
                default:
            }
        },
        goToPosition: function (x, y) {
            var len = this.body.length
            for (var i = len - 1; i >= 1; i--) {
                this.body[i].x = this.body[i - 1].x;
                this.body[i].y = this.body[i - 1].y;
            }
            this.body[0].x = x;
            this.body[0].y = y;
        }
    };

    return {
        get: function (x, y) {
            return Object.create(Snake).init(x, y);
        }
    };
})();

var SnakeElement = (function () {
    var SnakeElement = {
        init: function (x, y, color) {
            this.x = x;
            this.y = y;
            this.color = color;

            return this;
        },
        draw: function () {
            ctx.fillStyle = this.color;
            ctx.strokeStyle = constants.SnakeBorderColor;
            ctx.beginPath();
            ctx.rect(this.x - constants.SnakeElementSize / 2, this.y - constants.SnakeElementSize / 2,
                constants.SnakeElementSize, constants.SnakeElementSize);
            ctx.fill();
            ctx.stroke();
        },
        remove: function () {
            ctx.clearRect(this.x - constants.SnakeElementSize / 2, this.y - constants.SnakeElementSize / 2,
                constants.SnakeElementSize, constants.SnakeElementSize);
        }
    };

    return {
        get: function (x, y) {
            return Object.create(SnakeElement).init(x, y);
        }
    };
})();

var mySnake = Snake.get(constants.SnakeInitialPosition.x,
    constants.SnakeInitialPosition.y);
mySnake.draw();
//debugger;

function move() {
    window.onkeypress = function (e) {
        console.log(e.which);
        switch (e.charCode) {
            case 119:
                mySnake.direction = directions.up;
                break;
            case 100:
                mySnake.direction = directions.right;
                break;
            case 115:
                mySnake.direction = directions.down;
                break;
            case 97:
                mySnake.direction = directions.left;
                break;
            case 112:
                clearTimeout(timer);
                break;
            case 111:
                move();
                break;
            default:

        }
    }

    function isEmptyLocation(x, y) {
        var headX = mySnake.body[0].x,
            headY = mySnake.body[0].y;

        if (headX < 0 || canvas.width < headX || headY < 0 || headY > canvas.height) {
            return false;
        }

        if (mySnake.body.slice(1).filter(function (el) {
            return el.x === headX && el.y === headY;
        }).length > 0) {
            return false;
        }

        return true;
    }
    ctx.clearRect(0, 0, 900, 500);
    mySnake.move();
    if (!isEmptyLocation(mySnake.body[0].x, mySnake.body[0].y)) {
        clearTimeout(timer);
        mySnake.init(150, 150);
    }
    mySnake.draw();

    //debugger;
    var timer = setTimeout(move, 200);
}


move();