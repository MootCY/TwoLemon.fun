const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

let playerX = canvas.width/2;
let playerY = canvas.height-60;
let playerXV = 0;
let playerWidth = 130;
let playerHeight = 10;

let ballX = canvas.width/2;
let ballY = canvas.height/2;
let ballXV;
let ballYV = -3;
if(Math.floor(Math.random()*2)+1==1){
    ballXV = 3;
}
else{
    ballXV = -3;
}
let ballSize = 80;
let ballImg = new Image();
ballImg.src = "images/Lemon.png";
let isBallColliding = false;

let bounces = 0;

window.addEventListener('keydown', function(e){
    if(e.code == "ArrowRight") playerXV = 4;
    if(e.code == "ArrowLeft") playerXV = -4;
});

window.addEventListener("keyup", function(e){
    if(e.code == "ArrowLeft" || e.code == "ArrowRight") playerXV = 0;
});

let isBallColliding = false;

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "yellow";
    ctx.fillRect(playerX, playerY, playerWidth, playerHeight);
    ctx.drawImage(ballImg, ballX, ballY, ballSize, ballSize);
    ctx.fillStyle = "black";
    ctx.font = "80px Arial";
    ctx.fillText(bounces, canvas.width / 2, 90);

    // Check for collisions with walls
    if (ballX <= 0 || ballX + ballSize >= canvas.width) {
        ballXV = -ballXV;
    } else if (ballY <= 0) {
        ballYV = -ballYV;
    } else if (ballY + ballSize >= canvas.height) {
        window.alert("You died! Bounces: " + bounces);
        bounces = 0;
        playerXV = 0;
        ballX = canvas.width / 2;
        ballY = canvas.height / 2;
        ballYV = -3;
        if (Math.floor(Math.random() * 2) + 1 == 1) {
            ballXV = 3;
        } else {
            ballXV = -3;
        }
    }

    // Check for collision with player
    if (ballX + ballSize >= playerX &&
        ballX <= playerX + playerWidth &&
        ballY + ballSize >= playerY &&
        ballY <= playerY + playerHeight) {
        if (!isBallColliding) {
            let collisionSide = '';
            if (ballY + ballSize >= playerY && ballY + ballSize <= playerY + playerHeight) {
                collisionSide = 'top';
            } else if (ballY <= playerY + playerHeight && ballY >= playerY) {
                collisionSide = 'bottom';
            } else if (ballX + ballSize >= playerX && ballX + ballSize <= playerX + playerWidth) {
                collisionSide = 'left';
            } else if (ballX <= playerX + playerWidth && ballX >= playerX) {
                collisionSide = 'right';
            }

            switch (collisionSide) {
                case 'top':
                    ballY = playerY - ballSize;
                    break;
                case 'bottom':
                    ballY = playerY + playerHeight;
                    break;
                case 'left':
                    ballX = playerX - ballSize; // Move ball to the left of player
                    break;
                case 'right':
                    ballX = playerX + playerWidth; // Move ball to the right of player
                    break;
                default:
                    break;
            }

            ballYV = -ballYV;
            bounces++;
            isBallColliding = true;
        }
    } else {
        isBallColliding = false;
    }

    ballX += ballXV;
    ballY += ballYV;

    playerX += playerXV;

    requestAnimationFrame(update);
}

update();