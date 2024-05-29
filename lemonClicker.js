const counter = document.getElementById('counter');
const lemon = document.getElementById('lemon');

let score = 0;

lemon.addEventListener('click', function() {
  score++;

  counter.textContent = score;
});