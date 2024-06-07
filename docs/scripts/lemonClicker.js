const counter = document.getElementById('counter');
const lemon = document.getElementById('lemon');
const clickMultiplier = document.getElementById('clickMultiplier');
const lemomsPerSecondMultiplier = document.getElementById('lemomsPerSecondMultiplier');
const rebirth = document.getElementById('Rebirth');

let lemons = 0;
let lpc = 1;
let lps = 0;
let clickMultiplierPrice = 50;
let lemomsPerSecondMultiplierPrice = 100;
let rebirthCost = 1000;
let lpsBought = false;
let multiplier = 1;

lemon.addEventListener('click', function() {
  lemons+= lpc;

  counter.textContent = lemons + " Lemons";
});

clickMultiplier.addEventListener('click', function() {
  if (lemons >= clickMultiplierPrice) {
    lemons-= clickMultiplierPrice;
    counter.textContent = lemons + " Lemons";
    clickMultiplierPrice*= 2;
    clickMultiplier.textContent = "+" + multiplier + " Lemons per click Cost: " + clickMultiplierPrice + " Lemons";
    lpc++;
  }
});

lemomsPerSecondMultiplier.addEventListener('click', function() {
    if (lemons >= lemomsPerSecondMultiplierPrice){
      lemons-= lemomsPerSecondMultiplierPrice;
      counter.textContent = lemons + " Lemons";
      lemomsPerSecondMultiplierPrice*= 2;
      lemomsPerSecondMultiplier.textContent = "+" + multiplier + " Lemons per second Cost: " + lemomsPerSecondMultiplierPrice + " Lemons";
      lps+= multiplier;
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

rebirth.addEventListener('click', function() {
  if (lemons >= rebirthCost) {
    lemons-= rebirthCost;
    counter.textContent = lemons + " Lemons";
    multiplier++;
    lemomsPerSecondMultiplier.textContent = "+" + multiplier + " Lemons per second Cost: " + lemomsPerSecondMultiplierPrice + " Lemons";
    clickMultiplier.textContent = "+" + multiplier + " Lemons per click Cost: " + clickMultiplierPrice + " Lemons";
  }
});