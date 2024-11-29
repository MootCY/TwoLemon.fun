let canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext('2d');

let playerX = canvas.width/2;
let playerY = canvas.height/2;
let playerXV = 0;
let playerYV = 0;
let playerSize = 100;
let dir = 'forward';

let swordWidth = 20;
let swordHeight = 70;
let swordX = playerX/2;
let swordY = playerY/2 - swordHeight - 20;

window.addEventListener("keydown", function(e){
    if(e.code == "ArrowUp"){
        playerYV = 3;
        swordX = playerX/2;
        swordY = playerY/2 - swordHeight - 20;
        swordWidth = 20;
        swordHeight = 70;
        dir = 'forward';
    }
    if(e.code == "ArrowDown"){
        playerYV = -3;
        swordX = playerX/2;
        swordY = playerY/2 + swordHeight + 20;
        swordWidth = 20;
        swordHeight = 70;
        dir = 'backwards';
    }
    if(e.code == "ArrowRight"){
        playerXV = -3;
        swordX = playerX/2 - swordWidth - 20;
        swordY = playerY/2;
        swordWidth = 70;
        swordHeight = 20;
        dir = 'right';
    }
    if(e.code == "ArrowLeft"){
        playerXV = 3;
        swordX = playerX/2 + swordWidth + 20;
        swordY = playerY/2;
        swordWidth = 70;
        swordHeight = 20;
        dir = 'left';
    }
});

window.addEventListener("keyup", function(e){
    if(e.code == "ArrowUp" || e.code == "ArrowDown") playerYV = 0;
    if(e.code == "ArrowLeft" || e.code == "ArrowRight") playerXV = 0;
});

function update(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.fillRect(swordX,swordY,swordWidth,swordHeight);
    ctx.fillRect(playerX,playerY,playerSize,playerSize);

    playerX+=playerXV;
    playerY+=playerYV;
    requestAnimationFrame(update);
}

update()