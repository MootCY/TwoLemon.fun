let canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext('2d');

let playerX = 100;
let playerY = canvas.height/2-200;
let playerYV = 0;
let playerSize = 80;

let score = 0;
let highScore = localStorage.getItem('highScore')||0;

let gravity = 4.5;
let jumpHeight = 60;

let playerImg = new Image();
playerImg.src="images/Lemon.png";

let gap = 200;

let bottomPipeHeight = 1000;
let bottomPipeWidth = 120;
let bottomPipeX = canvas.width;
let bottomPipeY = canvas.height-(Math.random()*(canvas.height-200))+1;

let topPipeHeight = 1000;
let topPipeWidth = 120;
let topPipeX = canvas.width;
let topPipeY = bottomPipeY-bottomPipeHeight-gap;

let pipeSpeed = 5;

window.addEventListener("click",function(){
        gravity=0;
        playerYV=jumpHeight;
});

function update(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.drawImage(playerImg,playerX,playerY,playerSize,playerSize);

    ctx.fillStyle="green"
    ctx.fillRect(topPipeX,topPipeY,topPipeWidth,topPipeHeight);
    ctx.fillRect(bottomPipeX,bottomPipeY,bottomPipeWidth,bottomPipeHeight);

    ctx.fillStyle="black";
    ctx.font = "80px Arial";
    ctx.fillText(score,canvas.width/2,90);


    if(playerX + playerSize > bottomPipeX &&
        playerY + playerSize > bottomPipeY &&
        bottomPipeX + bottomPipeWidth > playerX &&
        bottomPipeY + bottomPipeHeight > playerY){
            if(score>highScore){
                highScore=score;
                localStorage.setItem('highScore',highScore);
            }
            window.alert("You died! Score: "+score+', Highscore: '+highScore);
            score = 0;
            playerY = canvas.height/2-100;
            topPipeX = canvas.width;
            bottomPipeX = canvas.width;
            bottomPipeY = canvas.height-(Math.random()*(canvas.height-200))+1;
            topPipeY=bottomPipeY-bottomPipeHeight-gap;
            playerYV = 0;
        }
    else if(playerX + playerSize > topPipeX &&
        playerY + playerSize > topPipeY &&
        topPipeX + topPipeWidth > playerX &&
        topPipeY + topPipeHeight > playerY){
            if(score>highScore){
                highScore=score;
                localStorage.setItem('highScore',highScore);
            }
            window.alert("You died! Score: "+score+', Highscore: '+highScore);
            score = 0;
            playerY = canvas.height/2-100;
            topPipeX = canvas.width;
            bottomPipeX = canvas.width;
            bottomPipeY = canvas.height-(Math.random()*(canvas.height-200))+1;
            topPipeY=bottomPipeY-bottomPipeHeight-gap;
            playerYV = 0;
    }
    if(playerY<0||playerY>canvas.height){
        window.alert("You died! Score: "+score);
        score = 0;
        playerY = canvas.height/2-100;
        topPipeX = canvas.width;
        bottomPipeX = canvas.width;
        bottomPipeY = canvas.height-(Math.random()*(canvas.height-200))+1;
        topPipeY=bottomPipeY-bottomPipeHeight-gap;
        playerYV = 0;
    }

    if(topPipeX<0&&bottomPipeX<0){
        score++;
        pipeSpeed+=0.1;
        gravity+=0.1;
        topPipeX = canvas.width;
        bottomPipeX = canvas.width;
        bottomPipeY = canvas.height-(Math.random()*(canvas.height-200))+1;
        topPipeY=bottomPipeY-bottomPipeHeight-gap
    }

    if(bottomPipeY>canvas.width||topPipeY>0){
        bottomPipeY = canvas.height-(Math.random()*(canvas.height-200))+1;
        topPipeY=bottomPipeY-bottomPipeHeight-gap
    }

    topPipeX-=pipeSpeed;
    bottomPipeX-=pipeSpeed;

    playerY-=playerYV;
    playerY+=gravity;
    playerYV=0;
    gravity=1;

    requestAnimationFrame(update);
}

update()