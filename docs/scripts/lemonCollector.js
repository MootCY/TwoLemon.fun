let canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");

let scoreCounter = document.getElementById('scoreCounter');
let score = 0;

let playerX = 0;
let playerY = 0;
let playerXV = 0;
let playerYV = 0;
let playerSize = 30;

let lemonX = 70;
let lemonY = 0;
let lemonSize = 50;

const lemonImg = new Image();
lemonImg.src="images/Lemon.png";

lemonImg.onload = function() {
    update();
};

window.addEventListener("keydown", function(e){
    if(e.code == "KeyW"){
        playerYV = -2;
    }
    if(e.code == "KeyS"){
        playerYV = 2;
    }
    if(e.code == "KeyD"){
        playerXV = 2;
    }
    if(e.code == "KeyA"){
        playerXV = -2;
    }
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
        lemonX = Math.floor(Math.random()*800-lemonSize) + 1;
        lemonY = Math.floor(Math.random()*600-lemonSize) + 1;
        score++;
        scoreCounter.textContent = score;
    }

    playerX += playerXV;
    playerY += playerYV;
    
    requestAnimationFrame(update);
}
