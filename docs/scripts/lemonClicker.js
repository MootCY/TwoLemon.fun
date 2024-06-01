const counter = document.getElementById('counter');
const lemon = document.getElementById('lemon');
const clickMultiplier = document.getElementById('clickMultiplier');

let lemons = 0;
let lps = 1;
let clickMultiplierPrice = 25;

lemon.addEventListener('click', function() {
  lemons+= lps;

  counter.textContent = lemons + " Lemons";
});
clickMultiplier.addEventListener('click', function() {
  if (lemons >= clickMultiplierPrice) {
    lemons-= clickMultiplierPrice;
    counter.textContent = lemons + " Lemons";
    clickMultiplierPrice+= 25;
    clickMultiplier.innerHTML = "+1 Lemons per click<br><hr>Cost: " + clickMultiplierPrice + "Lemons";
    lps++;
  }
});