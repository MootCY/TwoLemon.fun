const counter = document.getElementById('counter');
const lemon = document.getElementById('lemon');
const clickMultiplier = document.getElementById('clickMultiplier');
const lemonsPerSecondMultiplier = document.getElementById('lemonsPerSecondMultiplier');
const rebirth = document.getElementById('Rebirth');

let lemons = parseInt(localStorage.getItem('lemons')) || 0;
let lpc = parseInt(localStorage.getItem('lpc')) || 1;
let lps = parseInt(localStorage.getItem('lps')) || 0;
let clickMultiplierPrice = parseInt(localStorage.getItem('clickMultiplierPrice')) || 50;
let lemonsPerSecondMultiplierPrice = parseInt(localStorage.getItem('lemonsPerSecondMultiplierPrice')) || 100;
let rebirthPrice = parseInt(localStorage.getItem('rebirthPrice')) || 1000;
let lpsBought = localStorage.getItem('lpsBought') === 'true';
let multiplier = parseInt(localStorage.getItem('multiplier')) || 1;

counter.textContent = lemons + " Lemons";
lemonsPerSecondMultiplier.innerHTML = "+" + multiplier + " Lemons per second<br>Cost: " + lemonsPerSecondMultiplierPrice + " Lemons";
clickMultiplier.innerHTML = "+" + multiplier + " Lemons per click<br>Cost: " + clickMultiplierPrice + " Lemons";

let lpsUpdaterTimeoutId = null;

if (lpsBought) {
  lpsUpdater();
}

lemon.addEventListener('click', function() {
  lemons+= lpc;
  localStorage.setItem('lemons', lemons);
  counter.textContent = lemons + " Lemons";
});

clickMultiplier.addEventListener('click', function() {
  if (lemons >= clickMultiplierPrice) {
    lemons-= clickMultiplierPrice;
    localStorage.setItem('lemons', lemons);
    counter.textContent = lemons + " Lemons";
    clickMultiplierPrice*= 2;
    localStorage.setItem('clickMultiplierPrice', clickMultiplierPrice);
    clickMultiplier.innerHTML = "+" + multiplier + " Lemons per click<br>Cost: " + clickMultiplierPrice + " Lemons";
    lpc+= multiplier;
    localStorage.setItem('lpc', lpc);
  }
});

lemonsPerSecondMultiplier.addEventListener('click', function() {
    if (lemons >= lemonsPerSecondMultiplierPrice){
      lemons-= lemonsPerSecondMultiplierPrice;
      localStorage.setItem('lemons', lemons);
      counter.textContent = lemons + " Lemons";
      lemonsPerSecondMultiplierPrice*= 2;
      localStorage.setItem('lemonsPerSecondMultiplierPrice', lemonsPerSecondMultiplierPrice);
      lemonsPerSecondMultiplier.innerHTML = "+" + multiplier + " Lemons per second<br>Cost: " + lemonsPerSecondMultiplierPrice + " Lemons";
      lps+= multiplier;
      localStorage.setItem('lps', lps);
      if (!lpsBought){
        lpsBought = true;
        localStorage.setItem('lpsBought', lpsBought);
        lpsUpdater();
      }
    }
});

window.addEventListener('beforeunload', function() {
  if (lpsUpdaterTimeoutId !== null) {
    clearTimeout(lpsUpdaterTimeoutId);
  }
});

function lpsUpdater(){
    lemons+= lps;
    localStorage.setItem('lemons', lemons);
    counter.textContent = lemons + " Lemons";
    lpsUpdaterTimeoutId = setTimeout(lpsUpdater, 1000);
}

rebirth.addEventListener('click', function() {
  if (lemons >= rebirthPrice) {
    lemons = 0;
    localStorage.setItem('lemons', lemons);
    rebirthPrice*= 5;
    localStorage.setItem('rebirthPrice', rebirthPrice);
    lpc = 1;
    localStorage.setItem('lpc', lpc);
    lps = 0;
    localStorage.setItem('lps', lps);
    rebirth.innerHTML = "Rebirth<br>Cost: " + rebirthPrice + " Lemons"
    counter.textContent = lemons + " Lemons";
    multiplier+= 5;
    localStorage.setItem('multiplier', multiplier);
    clickMultiplierPrice = 50;
    localStorage.setItem('clickMultiplierPrice', clickMultiplierPrice);
    lemonsPerSecondMultiplierPrice = 100;
    localStorage.setItem('lemonsPerSecondMultiplierPrice', lemonsPerSecondMultiplierPrice);
    lemonsPerSecondMultiplier.innerHTML = "+" + multiplier + " Lemons per second<br>Cost: " + lemonsPerSecondMultiplierPrice + " Lemons";
    clickMultiplier.innerHTML = "+" + multiplier + " Lemons per click<br>Cost: " + clickMultiplierPrice + " Lemons";
  }
});