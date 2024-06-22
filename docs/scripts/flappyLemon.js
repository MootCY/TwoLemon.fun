let canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext('2d');

let playerX = 100;
let playerY = canvas.height/2-100;
let playerYV = 0;
let playerSize = 70;

let score = 0;

let gravity = 1;
let canJump = true;
let jumping = false;

let playerImg = new Image();
playerImg.src="images/Lemon.png";

let gap = 90;

let bottomPipeHeight = 450;
let bottomPipeWidth = 100;
let bottomPipeX = canvas.width;
let bottomPipeY = canvas.height-(Math.random()*400)+1;

let topPipeHeight = 450;
let topPipeWidth = 100;
let topPipeX = canvas.width;
let topPipeY = bottomPipeY-bottomPipeHeight-gap;

window.addEventListener("keydown",function(e){
    if(e.code=="Space"&&canJump&&!jumping){
        playerYV=7;
        canJump=false;
        jumping = true;
    }
});

window.addEventListener("keyup",function(e){
    if(e.code=="Space"){
        playerYV=0;
        canJump=true;
    }
});

function update(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.drawImage(playerImg,playerX,playerY,playerSize,playerSize);

    ctx.fillStyle="green"
    ctx.fillRect(topPipeX,topPipeY,topPipeWidth,topPipeHeight);
    ctx.fillRect(bottomPipeX,bottomPipeY,bottomPipeWidth,bottomPipeHeight);

    if(playerX + playerSize > bottomPipeX &&
        playerY + playerSize > bottomPipeY &&
        bottomPipeX + bottomPipeWidth > playerX &&
        bottomPipeY + bottomPipeHeight > playerY){
            score = 0;
            playerY = canvas.height/2-100;
            topPipeX = canvas.width;
            bottomPipeX = canvas.width;
            window.alert("You died!")
        }
    else if(playerX + playerSize > topPipeX &&
        playerY + playerSize > topPipeY &&
        topPipeX + topPipeWidth > playerX &&
        topPipeY + topPipeHeight > playerY){
            score = 0;
            playerY = canvas.height/2-100;
            topPipeX = canvas.width;
            bottomPipeX = canvas.width;
            window.alert("You died!")
    }

    if(topPipeX<0&&bottomPipeX<0){
        topPipeX = canvas.width;
        bottomPipeX = canvas.width;
    }


    if(topPipeY<0){
        topPipeHeight+=200
        topPipeY-=200;
    }
    else{
        topPipeHeight=300
        topPipeY = bottomPipeY-bottomPipeHeight-gap;
    }

    topPipeX-=3;
    bottomPipeX-=3;

    playerY-=playerYV;
    playerY+=gravity;

    requestAnimationFrame(update);
}

update()