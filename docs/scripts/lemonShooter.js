const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

let playerX = canvas.width/2;
let playerY = canvas.height/2;
let playerXV = 0;
let playerSize = 70;

let targetX = canvas.width/2;
let targetY = 20;
let targetWidth = 80;
let targetHeight = 20;

let bullets = [];
let bulletSize = 10;

let score = 0;

const playerImg = new Image();
playerImg.src = 'images/Lemon.png';

window.addEventListener('keydown', function(e){
    if(e.code == "ArrowRight") playerXV = 4;
    if(e.code == "ArrowLeft") playerXV = -4;
        if(e.code == "ArrowUp"){
            bullets.push({
                x: (playerX + 35),
                y: (playerY + 35)
            });
        }  
});

window.addEventListener("keyup", function(e){
    if(e.code == "ArrowLeft" || e.code == "ArrowRight") playerXV = 0;
});

function update(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    bullets.forEach((bullet,index) => {
        ctx.fillStyle = 'yellow';
        ctx.fillRect(bullet.x, bullet.y, bulletSize, bulletSize);

        bullet.y-= 4;
        
        if(bullet.x + bulletSize > targetX &&
            bullet.y + bulletSize > targetY &&
            targetX + targetWidth > bullet.x &&
            targetY + targetHeight > bullet.y){
                bullets.splice(index, 1);
                score++;
            }

        if(bullet.y < 0){
            bullets.splice(index, 1);
        }
    });

    ctx.drawImage(playerImg, playerX, playerY, playerSize, playerSize);

    ctx.fillStyle = 'red';
    ctx.fillRect(targetX, targetY, targetWidth, targetHeight);

    ctx.fillStyle = 'black';
    ctx.font = "80px Arial";
    ctx.fillText(score,canvas.width/2,canvas.height-20);

    playerX+= playerXV;
    playerY+= playerYV;

    requestAnimationFrame(update);
}

function targetMove(){
    targetX = (Math.random()*canvas.width - 50) + 50;
}

setInterval(targetMove,5000);
update()