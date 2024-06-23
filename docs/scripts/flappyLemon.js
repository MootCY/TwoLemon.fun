let canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext('2d');

let playerX = 100;
let playerY = canvas.height/2-200;
let playerYV = 0;
let playerSize = 70;

let score = 0;

let gravity = 1;
let jumpHeight = 50;

let playerImg = new Image();
playerImg.src="images/Lemon.png";

let gap = 170;

let bottomPipeHeight = 1000;
let bottomPipeWidth = 80;
let bottomPipeX = canvas.width;
let bottomPipeY = canvas.height-(Math.random()*(canvas.height-200))+1;

let topPipeHeight = 1000;
let topPipeWidth = 80;
let topPipeX = canvas.width;
let topPipeY = bottomPipeY-bottomPipeHeight-gap;

window.addEventListener("click",function(){
        gravity=0;
        playerYV=jumpHeight;
});

function update(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.drawImage(playerImg,playerX,playerY,playerSize,playerSize);

    ctx.fillStyle="green"
    ctx.fillRect(topPipeX,topPipeY,topPipeWidth,topPipeHeight);
    ctx.fillRect(bottomPipeX,bottomPipeY,bottomPipeWidth,bottomPipeHeight);

    ctx.font = "80px Arial";
    ctx.fillText(score,canvas.width/2,30);


    if(playerX + playerSize > bottomPipeX &&
        playerY + playerSize > bottomPipeY &&
        bottomPipeX + bottomPipeWidth > playerX &&
        bottomPipeY + bottomPipeHeight > playerY){
            score = 0;
            playerY = canvas.height/2-100;
            topPipeX = canvas.width;
            bottomPipeX = canvas.width;
            bottomPipeY = canvas.height-(Math.random()*(canvas.height-200))+1;
            topPipeY=bottomPipeY-bottomPipeHeight-gap
            playerYV = 0;
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
            bottomPipeY = canvas.height-(Math.random()*(canvas.height-200))+1;
            topPipeY=bottomPipeY-bottomPipeHeight-gap
            playerYV = 0;
            window.alert("You died!")
    }
    if(playerY<0||playerY>canvas.height){
        score = 0;
        playerY = canvas.height/2-100;
        topPipeX = canvas.width;
        bottomPipeX = canvas.width;
        bottomPipeY = canvas.height-(Math.random()*(canvas.height-200))+1;
        topPipeY=bottomPipeY-bottomPipeHeight-gap
        playerYV = 0;
        window.alert("You died!")
    }

    if(topPipeX<0&&bottomPipeX<0){
        score++;
        topPipeX = canvas.width;
        bottomPipeX = canvas.width;
        bottomPipeY = canvas.height-(Math.random()*(canvas.height-200))+1;
        topPipeY=bottomPipeY-bottomPipeHeight-gap
    }

    if(bottomPipeY>canvas.width||topPipeY>0){
        bottomPipeY = canvas.height-(Math.random()*(canvas.height-200))+1;
        topPipeY=bottomPipeY-bottomPipeHeight-gap
    }

    topPipeX-=3;
    bottomPipeX-=3;

    playerY-=playerYV;
    playerY+=gravity;
    playerYV=0;
    gravity=1;

    requestAnimationFrame(update);
}

update()