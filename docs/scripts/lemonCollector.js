let canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");

let playerX = 400;
let playerY = 300;
let playerXV = 0;
let playerYV = 0;
let playerSize = 50;

let lemonX = 0;
let lemonY = 0;
let lemonSize = 30;

const lemonImg = new Image();
lemonImg.src='images/Lemon.png';

window.addEventListener("keydown", function(e){
    if(e.code == "KeyW") playerYV = -5;
    if(e.code == "KeyS") playerYV = 5;
    if(e.code == "KeyD") playerXV = 5;
    if(e.code == "KeyA") playerXV = -5;
});

window.addEventListener("keyup", function(e){
    if(e.code == "KeyW" || e.code == "KeyS") playerYV = 0;
    if(e.code == "KeyA" || e.code == "KeyD") playerXV = 0;
});

function update(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    playerX += playerXV;
    playerY += playerYV;
    ctx.fillRect(playerX, playerY, playerSize, playerSize);

    ctx.drawImage(lemonImg, lemonX, lemonY, lemonSize, lemonSize);

    requestAnimationFrame(update);
}

update();