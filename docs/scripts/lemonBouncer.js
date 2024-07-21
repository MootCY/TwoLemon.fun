const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

let playerX = canvas.width/2;
let playerY = canvas.height-60;
let playerXV = 0;
let playerWidth = 90;
let playerHeight = 30;

let ballX = canvas.width/2;
let ballY = canvas.height/2;
let ballXV = Math.floor(Math.random()*4)-2;
let ballYV = -2;
let ballSize = 40;

window.addEventListener('keydown', function(e){
    if(e.code == "ArrowRight") playerXV = 4;
    if(e.code == "ArrowLeft") playerXV = -4;
});

window.addEventListener("keyup", function(e){
    if(e.code == "ArrowLeft" || e.code == "ArrowRight") playerXV = 0;
});

function update(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = "white"

    ctx.fillRect(playerX, playerY, playerWidth, playerHeight);

    ctx.fillRect(ballX,ballY,ballSize,ballSize);

    if(ballX <= 0 || ballX + ballSize >= canvas.width){
        ballXV = -ballXV
    }
    else if(ballY <= 0){
        ballYV = -ballYV
    }
    else if(ballY + ballSize >= canvas.width){
        window.alert("You died!");
        ballX = canvas.width/2;
        ballY = canvas.height/2;
        ballXV = Math.floor(Math.random()*4)-2;
        ballYV = -2;
    }

    if(playerX + playerWidth > ballX &&
    playerY + playerHeight > ballY &&
    ballX + ballSize > playerX &&
    ballY + ballSize > playerY){
        ballYV = -ballYV
    }

    ballX+=ballXV
    ballY+=ballYV

    playerX+= playerXV;

    requestAnimationFrame(update);
}

update();