var NewGame = function() {
    var Styles = (function() {
        var Styles = {
            init: function(fillColor, outlineColor) {
                this.fillColor = fillColor;
                this.outlineColor = outlineColor;
            }
        };

        return Styles;
    });

    var Game = (function() {
        var Game = {
            init: function(height, width, snake, styles) {
                this.snake = snake;
                this.foodCoordinates = {
                    x: (width / 2) | 0,
                    y: (height / 2) | 0
                };
                this.grid = getInitialGrid(height, width, this.snake, this.foodCoordinates);
                this.height = height;
                this.width = width;
                this.continues = true;
                this.points = 0;
                this.speed = 300 + this.points * 5;

                this.canvas = document.getElementById('game-window');
                this.context = this.canvas.getContext('2d');

                this.canvas.width = width * 20;
                this.canvas.height = height * 20;

                return this;
            },
            draw: function() {
                this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
                for (var row = 0; row < this.height; row++) {
                    for (var col = 0; col < this.width; col++) {
                        switch (this.grid[row][col]) {
                            case 0:
                                this.context.fillStyle = '#00ff00';
                                this.context.beginPath();
                                this.context.rect(col * 20, row * 20, 20, 20);
                                this.context.fill();
                                break;
                            case 1:
                                this.context.fillStyle = '#ff0000';
                                this.context.beginPath();
                                this.context.rect(col * 20, row * 20, 20, 20);
                                this.context.fill();
                                this.context.stroke();
                                break;
                            case 2:
                                this.context.fillStyle = '#0000ff';
                                this.context.beginPath();
                                this.context.rect(col * 20, row * 20, 20, 20);
                                this.context.fill();
                                break;
                            default:
                        }

                    }
                }
                this.context.fillStyle = '#0000ff';
                this.context.beginPath();
                this.context.font = "20px Georgia";
                this.context.fillText(this.points + ' points', 40, 20);
                this.context.fill();
                this.context.fill();
            },
            move: function() {
                var snakeNextPosition = this.snake.nextPosition(),
                    checkX = snakeNextPosition.x,
                    checkY = snakeNextPosition.y;
                if (checkX < 0 || checkX > this.width - 1) {
                    this.continues = false;
                    return;
                }
                if (checkY < 0 || checkY > this.height - 1) {
                    this.continues = false;
                    return;
                }
                if (this.grid[checkY][checkX] == 1) {
                    this.continues = false;
                }
                if (this.grid[checkY][checkX] == 2) {
                    this.grid[checkY][checkX] = 0;
                    this.snake.body.push({
                        x: checkX,
                        y: checkY
                    });
                    this.points += 1;
                    this.foodCoordinates = this.generateFood();
                }

                this.snake.move();
                this.grid = getInitialGrid(this.height, this.width, this.snake, this.foodCoordinates);
            },
            generateFood: function() {
                var randX = getRandomInt(0, this.width - 1);
                var randY = getRandomInt(0, this.height - 1);

                if (this.grid[randX][randY] == 0) {
                    return {
                        x: randX,
                        y: randY
                    };
                } else {
                    this.generateFood();
                }
            }
        };

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function getInitialGrid(height, width, snake, foodCoordinates) {
            var grid = [];
            for (var row = 0; row < height; row++) {
                var newLine = [];
                for (var col = 0; col < width; col++) {
                    newLine[col] = 0;
                }
                grid.push(newLine);
            }

            for (var element in snake.body) {
                grid[snake.body[element].y][snake.body[element].x] = 1;
            }

            grid[foodCoordinates.y][foodCoordinates.x] = 2;

            return grid;
        }

        return Game;
    }());

    var Snake = (function() {
        var directions = {
            up: 'up',
            down: 'down',
            left: 'left',
            right: 'right',
        }

        var Snake = {
            init: function(length, styles) {
                this.body = getInitialBody(length);
                this.styles = styles;
                this.direction = directions.right;

                return this;
            },
            move: function() {
                var len = this.body.length;

                for (var i = len - 1; i >= 1; i--) {
                    this.body[i].x = this.body[i - 1].x;
                    this.body[i].y = this.body[i - 1].y;
                }

                this.body[0].x += this.getXIncrement();
                this.body[0].y += this.getYIncrement();
            },
            nextPosition: function() {
                nextX = this.body[0].x + this.getXIncrement();
                nextY = this.body[0].y + this.getYIncrement();
                return {
                    x: nextX,
                    y: nextY
                };
            },
            getXIncrement: function() {
                if (this.direction == directions.right) {
                    return 1;
                } else if (this.direction == directions.left) {
                    return -1;
                } else {
                    return 0;
                }
            },
            getYIncrement: function() {
                if (this.direction == directions.down) {
                    return 1;
                } else if (this.direction == directions.up) {
                    return -1;
                } else {
                    return 0;
                }
            }
        }

        function getInitialBody(length) {
            var result = [];

            for (var i = 0; i < length; i++) {
                result.push({
                    x: length - i,
                    y: 0
                });
            }

            return result;
        }

        return Snake;
    }());

    var keyIsPressed = false;
    var snakeStyles = Object.create(Styles).init
    var snake = Object.create(Snake).init(5);
    var game = Object.create(Game).init(10, 10, snake);

    var e = document.addEventListener('keydown', function(event) {
        if (!keyIsPressed) {
            keyIsPressed = true;
            if (event.keyCode == 37 && game.snake.direction != 'right') {
                game.snake.direction = 'left';
            } else if (event.keyCode == 39 && game.snake.direction != 'left') {
                game.snake.direction = 'right';
            }
            if (event.keyCode == 38 && game.snake.direction != 'down') {
                game.snake.direction = 'up';
            } else if (event.keyCode == 40 && game.snake.direction != 'up') {
                game.snake.direction = 'down';
            } else if (event.keyCode == 32) {
                game.continues = true;
                game.points = 0;
                snake = Object.create(Snake).init(5);
                game = Object.create(Game).init(10, 10, snake);
                play();
            }
        };
    }, true);

    var startGame;

    play = function() {
        keyIsPressed = false;
        game.move();
        game.draw();

        if (!game.continues) {
            clearInterval(startGame);
            game.context.fillStyle = '#0000ff';
            game.context.beginPath();
            game.context.font = "40px Georgia";
            game.context.textAlign = 'center';
            game.context.fillText('Game Over!', (game.width * 20 / 2) | 0, (game.height * 20 / 2) | 0);
            game.context.fillText('Press spacebar to start over', (game.width * 20 / 2) | 0, ((game.height + 4) * 20 / 2) | 0);
            game.context.fill();

            return;
        }

        setTimeout(play, Math.max(300 - game.points * 30, 50));
    }

    play();
}

var outerEvent = document.addEventListener('keydown', function(event) {
    if (event.keyCode == 32/*spacebar*/) {
        NewGame();
    };
}, true);

NewGame();