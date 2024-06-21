const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

const scoreCounter = document.getElementById('scoreCounter');
let score = 0;

let playerX = canvas.width/2;
let playerY = canvas.height/2;
let playerXV = 0;
let playerYV = 0;
let playerSize = 20;

let lemonX = canvas.width/1.5;
let lemonY = canvas.height/2;
let lemonSize = 40;

const lemonImg = new Image();
lemonImg.src="images/Lemon.png";

lemonImg.onload = function() {
    update();
};

window.addEventListener("keydown", function(e){
    if(e.code == "ArrowUp") playerYV = -2.5;
    if(e.code == "ArrowDown") playerYV = 2.5;
    if(e.code == "ArrowRight") playerXV = 2.5;
    if(e.code == "ArrowLeft") playerXV = -2.5;
});

window.addEventListener("keyup", function(e){
    if(e.code == "ArrowUp" || e.code == "ArrowDown") playerYV = 0;
    if(e.code == "ArrowLeft" || e.code == "ArrowRight") playerXV = 0;
});

function update(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(lemonImg, lemonX, lemonY, lemonSize, lemonSize);
    
    ctx.fillRect(playerX, playerY, playerSize, playerSize);

    ctx.font = "80px Arial";
    ctx.fillText(score,canvas.width/2,90);

    if(playerX + playerSize > lemonX && playerY + playerSize > lemonY && lemonX + lemonSize > playerX && lemonY + lemonSize > playerY){
        score++;
        lemonX = Math.random()*canvas.width;
        lemonY = Math.random()*canvas.height;
        if (lemonX + lemonSize > canvas.width) {
            lemonX = Math.random()*canvas.width;
        }
        if (lemonY + lemonSize > canvas.height) {
            lemonY = Math.random()*canvas.height;  
        }
    }

    playerX += playerXV;
    playerY += playerYV;
    
    requestAnimationFrame(update);
}
