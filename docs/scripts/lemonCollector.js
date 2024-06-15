let canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");

let playerX = 400;
let playerY = 400;
let playerXV = 0;
let playerYV = 0;
let playerSize = 50;

let lemonX = 300;
let lemonY = 400;
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
        console.log("Key W pressed");
    }
    if(e.code == "KeyS"){
        playerYV = 5
        console.log("Key S pressed");
    };
    if(e.code == "KeyD"){
        playerXV = 5;
        console.log("Key D pressed");
    }
    if(e.code == "KeyA"){
        playerXV = -5
        console.log("Key A pressed");
    };
});

window.addEventListener("keyup", function(e){
    if(e.code == "KeyW" || e.code == "KeyS") playerYV = 0;
    if(e.code == "KeyA" || e.code == "KeyD") playerXV = 0;
});

function update(){
    console.log("Updating...");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    console.log("Cleared items");

    ctx.drawImage(lemonImg, lemonX, lemonY, lemonSize, lemonSize);
    console.log("Drew lemon");

    ctx.fillRect(playerX, playerY, playerSize, playerSize);
    console.log("Drew player");

    if(playerX + playerSize > lemonX && playerY + playerSize > lemonY && lemonX + lemonSize > playerX && lemonY + lemonSize > playerY){
        console.log("Collision detected");
    }

    playerX += playerXV;
    playerY += playerYV;
    
    console.log("Updated successfully");
    requestAnimationFrame(update);
}
