let canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");

let playerX = canvas.width/2;
let playerY = canvas.height/2;
let playerXV = 0;
let playerYV = 0;
let playerSize = 50;

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
    requestAnimationFrame(update);
}

update();