let canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");

let playerX = 0;
let playerY = 0;
let playerSize = 50;

function loop(){
    draw()
    update()
    requestAnimationFrame(loop)
}

function draw(){
    ctx.fillRect(playerX, playerY, playerSize, playerSize);
    ctx.clearRect(0, 0, 10000, 10000);
}

function update(){

}

loop()