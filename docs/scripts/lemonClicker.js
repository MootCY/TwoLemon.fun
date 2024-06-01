const counter = document.getElementById('counter');
const lemon = document.getElementById('lemon');
const clickMultiplier = document.getElementById('clickMultiplier');

let lemons = 0;
let lps = 1;
let clickMultiplierPrice = 25;

lemon.addEventListener('click', function() {
  lemons+= lps;

  counter.textContent = lemons + " lemons";
});