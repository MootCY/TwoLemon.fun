let canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");

let scoreCounter = document.getElementById('scoreCounter');
let score = 0;

let playerX = canvas.width/2;
let playerY = canvas.height/2;
let playerXV = 0;
let playerYV = 0;
let playerSize = 30;

let lemonX = canvas.width/2;
let lemonY = canvas.height/2;
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
    
    ctx.fillStyle("blue");
    ctx.fillRect(playerX, playerY, playerSize, playerSize);

    ctx.font = "20px Arial";
    ctx.fillText(score,canvas.width/2,10);

    if(playerX + playerSize > lemonX && playerY + playerSize > lemonY && lemonX + lemonSize > playerX && lemonY + lemonSize > playerY){
        lemonX = Math.random()*canvas.width - 100;
        lemonY = Math.random()*canvas.height - 100;
        score++;
    }

    playerX += playerXV;
    playerY += playerYV;
    
    requestAnimationFrame(update);
}
