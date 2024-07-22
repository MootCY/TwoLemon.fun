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

let bounces = 0;

window.addEventListener('keydown', function(e){
    if(e.code == "ArrowRight") playerXV = 4;
    if(e.code == "ArrowLeft") playerXV = -4;
});

window.addEventListener("keyup", function(e){
    if(e.code == "ArrowLeft" || e.code == "ArrowRight") playerXV = 0;
});

function update(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = "yellow"

    ctx.fillRect(playerX, playerY, playerWidth, playerHeight);

    ctx.drawImage(ballImg,ballX,ballY,ballSize,ballSize);

    ctx.fillStyle = "black";

    ctx.font = "80px Arial";
    ctx.fillText(bounces,canvas.width/2,90);

    if(ballX <= 0 || ballX + ballSize >= canvas.width){
        ballXV = -ballXV
    }
    else if(ballY <= 0){
        ballYV = -ballYV
    }
    else if(ballY + ballSize >= canvas.width){
        window.alert("You died! Bounces: "+bounces);
        bounces=0;
        playerXV=0;
        ballX = canvas.width/2;
        ballY = canvas.height/2;
        if(Math.floor(Math.random()*2)+1==1){
            ballXV = 3;
        }
        else{
            ballXV = -3;
        }
        ballYV = -3;
    }

    if(ballY+ballSize>playerY&&ballY>playerY+playerHeightballX>playerX&&ballX+ballSize<playerX+playerWidth){
        ballYV = -ballYV;
        bounces++;
    }

    ballX+=ballXV
    ballY+=ballYV

    playerX+= playerXV;

    requestAnimationFrame(update);
}

update();