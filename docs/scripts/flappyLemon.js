let canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext('2d');

let playerX = 100;
let playerY = canvas.height/2-200;
let playerYV = 0;
let playerSize = 80;

let hitboxX = playerX;
let hitboxY = playerY;
let hitboxSize = 90;
let hitboxOn = false;

let score = 0;
let highScore = localStorage.getItem('highScore')||0;

let gravity = 3;
let jumpHeight = 80;

let playerImg = new Image();
playerImg.src="images/Lemon.png";

let gap = 250;

let bottomPipeHeight = 1000;
let bottomPipeWidth = 80;
let bottomPipeX = canvas.width;
let bottomPipeY = canvas.height-(Math.random()*(canvas.height-200))+1;

let topPipeHeight = 1000;
let topPipeWidth = 80;
let topPipeX = canvas.width;
let topPipeY = bottomPipeY-bottomPipeHeight-gap;

let pipeSpeed = 3;

window.addEventListener("click",function(){
        gravity=0;
        playerYV=jumpHeight;
});

window.addEventListener('keydown', function(e){
    if(e.code == "h") hitboxOn == true? hitboxOn = false : hitboxOn = true;
});

function update(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    
    ctx.fillStyle="red";
    if(hitboxOn==true){
        ctx.fillRect(hitboxX,hitboxY,hitboxSize,hitboxSize);
    }
    
    ctx.fillStyle="black";
    ctx.drawImage(playerImg,playerX,playerY,playerSize,playerSize);

    ctx.fillStyle="green";
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
    if(playerY>canvas.height){
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

    if(playerY<0){
        playerY=0;
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
    hitboxX=playerX;
    hitboxY=playerY;
    playerYV=0;
    gravity=3;

    requestAnimationFrame(update);
}

update()