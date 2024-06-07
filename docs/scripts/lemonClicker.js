const counter = document.getElementById('counter');
const lemon = document.getElementById('lemon');
const clickMultiplier = document.getElementById('clickMultiplier');
const lemomsPerSecondMultiplier = document.getElementById('lemomsPerSecondMultiplier');

let lemons = 0;
let lpc = 1;
let lps = 0;
let clickMultiplierPrice = 50;
let lemomsPerSecondMultiplierPrice = 100;
let lpsBought = false;

lemon.addEventListener('click', function() {
  lemons+= lpc;

  counter.textContent = lemons + " Lemons";
});

clickMultiplier.addEventListener('click', function() {
  if (lemons >= clickMultiplierPrice) {
    lemons-= clickMultiplierPrice;
    counter.textContent = lemons + " Lemons";
    clickMultiplierPrice+= clickMultiplierPrice;
    clickMultiplier.textContent = "+1 Lemons per click Cost: " + clickMultiplierPrice + " Lemons";
    lpc++;
  }
});

lemomsPerSecondMultiplier.addEventListener('click', function() {
    if (lemons >= lemomsPerSecondMultiplierPrice){
      lemons-= lemomsPerSecondMultiplierPrice;
      counter.textContent = lemons + " Lemons";
      lemomsPerSecondMultiplierPrice+= lemomsPerSecondMultiplierPrice;
      lemomsPerSecondMultiplier.textContent = "+1 Lemons per second Cost: " + lemomsPerSecondMultiplierPrice + " Lemons";
      lps++
      if (lpsBought == false){
        lpsBought = true;
        lpsUpdater();
      }
    }
});

function lpsUpdater(){
    lemons+= lps;
    counter.textContent = lemons + " Lemons";
    setTimeout(lpsUpdater, 1000);
}