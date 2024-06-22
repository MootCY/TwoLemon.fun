let canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext('2d');

let playerX = 100;
let playerY = canvas.height/2-100;
let playerYV = 0;
let playerSize = 70;

let fallSpeed = 1;

let playerImg = new Image();
playerImg.src="images/Lemon.png";

let gap = 120;

let topPipeHeight = 450;
let topPipeWidth = 100;
let topPipeX = canvas.width;
let topPipeY = canvas.height-(Math.random()*400)+1;

let bottomPipeHeight = 450;
let bottomPipeWidth = 100;
let bottomPipeX = canvas.width;
let bottomPipeY = topPipeY-bottomPipeHeight-gap;

window.addEventListener("keydown",function(e){
    if(e.code=="Space")playerYV=2;
});

window.addEventListener("keyup",function(e){
    if(e.code=="Space")playerYV=0;
});

function update(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.drawImage(playerImg,playerX,playerY,playerSize,playerSize);

    ctx.fillStyle="green"
    ctx.fillRect(topPipeX,topPipeY,topPipeWidth,topPipeHeight);
    ctx.fillRect(bottomPipeX,bottomPipeY,bottomPipeWidth,bottomPipeHeight);

    topPipeX-=3;
    bottomPipeX-=3;

    playerY-=playerYV;
    playerY+=fallSpeed;

    requestAnimationFrame(update);
}

update()