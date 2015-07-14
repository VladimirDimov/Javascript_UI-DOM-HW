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

var Snake = (function () {
    var Snake = {
        init: function () {
            this.direction = directions.right;
            this.body = [
                { x: 0, y: 0 },
                { x: 0, y: 1 },
                { x: 0, y: 2 },
                { x: 0, y: 3 },
                { x: 0, y: 4 },
            ];

            return this;
        },
        move: function () {
            var xIncrement,
                yIncrement,
                snakeLength = this.body.length;

            switch (this.direction) {
                case directions.right:
                    xIncrement = 1;
                    yIncrement = 0;
                    break;
                case directions.left:
                    xIncrement = -1;
                    yIncrement = 0;
                    break;
                case directions.up:
                    yIncrement = -1;
                    xIncrement = 0;
                    break;
                case directions.down:
                    yIncrement = 1;
                    xIncrement = 0;
                    break;
                default:
            }
            
            for (var i = snakeLength - 1; i >= 1; i--) {
                this.body[i].x = this.body[i - 1].x;
                this.body[i].y = this.body[i - 1].y;
            }

            this.body[0].x += xIncrement;
            this.body[0].y += yIncrement;
        }
    }

    return Snake;
}());

var Grid = (function () {
    var Grid = {
        init: function (cols, rows, cellSize, snake, canvasId) {
            this.columns = cols;
            this.rows = rows;
            this.cellSize = cellSize;
            this.gridMirror = createGridArray(rows, cols);
            this.snake = snake;
            this.canvas = document.getElementById(canvasId);
            this.ctx = this.canvas.getContext('2d');
            return this;
        },
        draw: function (snakeElement) {
            var numberOfRows = this.rows,
                numberOfCols = this.columns,
                snakeLen = this.snake.body.length,
                copyOfGrid = [];

            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

            for (var i = 0; i < snakeLen; i++) {
                copyOfGrid[this.snake.body[i].x][this.snake.body[i].y] = 1;
            }

            for (var row = 0; row < numberOfRows; row++) {
                for (var col = 0; col < numberOfCols; col++) {
                    if (copyOfGrid[row][col] == 1) {
                        snakeElement.drawAt(
                            col * snakeElement.width + snakeElement.width / 2,
                            row * snakeElement.height + snakeElement.height / 2,
                            this.ctx
                            );
                    }
                }
            }
        }
    }

    function createGridArray(rows, cols) {
        var result = [];
        for (var row = 0; row < rows; row++) {
            var line = [];
            for (var col = 0; col < cols; col++) {
                line.push(0);
            }
            result.push(line);
        }

        return result;
    }

    return Grid;
}());

var Cell = (function () {
    var Cell = {
        init: function (width, height, color) {
            this.width = width;
            this.height = height;
            this.color = color;

            return this;
        },

        drawAt: function (x, y, context) {
            var cornerX = x - this.width / 2,
            cornerY = y - this.height / 2;

            context.beginPath();
            context.rect(cornerX, cornerY, this.width, this.height);
            context.fill();
            context.stroke();
        }
    };

    return Cell;
}());

var cell = Object.create(Cell).init(20, 20, 'red');
var snake = Object.create(Snake).init();
var grid = Object.create(Grid).init(50, 30, 20, snake, 'game-window');



function runGame() {
    grid.snake.move();
    grid.draw(cell);
    setInterval(runGame(), 300);
}

runGame();

debugger;