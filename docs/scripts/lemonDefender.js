let canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext('2d');

let playerX = canvas.width/2;
let playerY = canvas.height/2;
let playerXV = 0;
let playerYV = 0;
let playerSize = 100;

window.addEventListener("keydown", function(e){
    if(e.code == "ArrowUp") playerYV = -3;
    if(e.code == "ArrowDown") playerYV = 3;
    if(e.code == "ArrowRight") playerXV = 3;
    if(e.code == "ArrowLeft") playerXV = -3;
});

window.addEventListener("keyup", function(e){
    if(e.code == "ArrowUp" || e.code == "ArrowDown") playerYV = 0;
    if(e.code == "ArrowLeft" || e.code == "ArrowRight") playerXV = 0;
});

function update(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    
    requestAnimationFrame(update);
}