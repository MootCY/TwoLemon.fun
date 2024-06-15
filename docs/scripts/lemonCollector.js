let canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");

let playerX = 0;
let playerY = 0;
let playerXV = 0;
let playerYV = 0;
let playerSize = 50;

let lemonX = 70;
let lemonY = 0;
let lemonSize = 30;

const lemonImg = new Image();
lemonImg.src="images/Lemon.png";

lemonImg.onload = function() {
    update();
    console.log("Image loaded");
};

window.addEventListener("keydown", function(e){
    if(e.code == "KeyW"){
        playerYV = -5;
    }
    if(e.code == "KeyS"){
        playerYV = 5
    };
    if(e.code == "KeyD"){
        playerXV = 5;
    }
    if(e.code == "KeyA"){
        playerXV = -5
    };
});

window.addEventListener("keyup", function(e){
    if(e.code == "KeyW" || e.code == "KeyS") playerYV = 0;
    if(e.code == "KeyA" || e.code == "KeyD") playerXV = 0;
});

function update(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(lemonImg, lemonX, lemonY, lemonSize, lemonSize);

    ctx.fillRect(playerX, playerY, playerSize, playerSize);

    if(playerX + playerSize > lemonX && playerY + playerSize > lemonY && lemonX + lemonSize > playerX && lemonY + lemonSize > playerY){
        console.log("Collision detected");
    }

    playerX += playerXV;
    playerY += playerYV;
    
    requestAnimationFrame(update);
}
