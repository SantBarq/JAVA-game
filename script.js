let canvas;
let context;
let gameloop;

const boardX = 300;
const boardY = 300;
const paddleH = 10;
const paddleD = boardY - paddleH;
const paddleW = 150;

let paddleX =150;
let ballX = 150;
let ballY = 150;
let ballDX = 2;
let ballDY = 4;

function drawGameCanvas () {
    canvas = document.getElementById('gameBoard');
    if (canvas.getContext) {
        context = canvas.getContext('2d');
    }
    gameLoop = setInterval(draw,16);
}

drawGameCanvas();

function draw() {
    context.clearRect(0, 0, boardX, boardY);

    context.fillstyle = 'thistle';
    context.beginPath();
    context.rect(0, 0, boardX, boardY);
    context.closePath();
    context.fill();

    context.fillStyle = 'tomato';
    context.beginPath();
    context.arc(ballX, ballY, 15, 0, Math.PI * 2, true);
    context.closePath();
    context.fill();

    context.fillStyle = 'navy';
    context.beginPath();
    context.rect(paddleX, paddleD, paddleW, paddleH)
    context.closePath();
    context.fill();

    ballX += ballDX;
    ballY += ballDY;

    if (ballX + ballDX > boardX - 15 || ballX + ballDX < 15 ){
        ballDX = -ballDX;
    }

    if (ballY + ballDY < 15) {
        ballDY = -ballDY;

    } else if (ballY + ballDY > boardY - 15) {
        if (ballX > paddleX && ballX < paddleX + paddleW){
            ballDX = -ballDX;
        }
    }
}