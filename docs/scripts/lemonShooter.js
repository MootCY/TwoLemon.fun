const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

let playerX = canvas.width/2;
let playerY = canvas.height/2;
let playerXV = 0;
let playerYV = 0;
let playerSize = 70;

let bulletX = 0;
let bulletY = 0;
let bulletSize = 10;
let bulletState = 'notShooting';

const playerImg = new Image();
playerImg.src = 'images/Lemon.png';

window.addEventListener('keydown', function(e){
    if(e.code == "KeyW") playerYV = -1.5;
    if(e.code == "KeyS") playerYV = 1.5;
    if(e.code == "KeyD") playerXV = 1.5;
    if(e.code == "KeyA") playerXV = -1.5;
    if(e.code == "Space") bulletState = 'shooting';
});

window.addEventListener("keyup", function(e){
    if(e.code == "KeyW" || e.code == "KeyS") playerYV = 0;
    if(e.code == "KeyA" || e.code == "KeyD") playerXV = 0;
});

function update(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if(bulletState == 'shooting'){
        bulletX = playerX;
        bulletY = playerY;
        ctx.fillRect(bulletX, bulletY, bulletSize, bulletSize);
        bulletY--;
    }

    if(bulletY < 0){
        bulletState = 'notShooting';
    }

    ctx.drawImage(playerImg, playerX, playerY, playerSize, playerSize);

    playerX+= playerXV;
    playerY+= playerYV;
    requestAnimationFrame(update);
}

update()