let canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext('2d');

let playerX = 100;
let playerY = canvas.height/2-100;
let playerYV = 0;
let playerSize = 70;

let fallSpeed = 2;

let playerImg = new Image();
playerImg.src="images/Lemon.png";

window.addEventListener("keydown",function(e){
    if(e.code="Space")playerYV+=5;
});

function update(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.drawImage(playerImg,playerX,playerY,playerSize,playerSize);

    playerY-=playerYV;
    playerY+=fallSpeed;

    requestAnimationFrame(update);
}

update()