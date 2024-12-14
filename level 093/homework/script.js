let cookies = 0;
let gold = 0;
let cookiesPerClick = 1;
let goldPerClick = 1;

let bigFingerPrice = 50;
let betterMinesPrice = 100;
let doubleCookiesPrice = 200;

const cookieCountElem = document.getElementById('cookieCount');
const goldCountElem = document.getElementById('goldCount');
const cookieButton = document.getElementById('cookieButton');
const buyBigFinger = document.getElementById('buyBigFinger');
const buyBetterMines = document.getElementById('buyBetterMines');
const buyDoubleCookies = document.getElementById('buyDoubleCookies');
const bigFingerPriceElem = document.getElementById('bigFingerPrice');
const betterMinesPriceElem = document.getElementById('betterMinesPrice');
const doubleCookiesPriceElem = document.getElementById('doubleCookiesPrice');

function updateDisplay() {
    cookieCountElem.textContent = cookies;
    goldCountElem.textContent = gold;
    bigFingerPriceElem.textContent = bigFingerPrice;
    betterMinesPriceElem.textContent = betterMinesPrice;
    doubleCookiesPriceElem.textContent = doubleCookiesPrice;
}

cookieButton.addEventListener('click', () => {
    cookies += cookiesPerClick;
    gold += goldPerClick;
    updateDisplay();
});

buyBigFinger.addEventListener('click', () => {
    if (gold >= bigFingerPrice) {
        gold -= bigFingerPrice;
        cookiesPerClick += 1;
        bigFingerPrice *= 2;
        updateDisplay();
    }
});

buyBetterMines.addEventListener('click', () => {
    if (cookies >= betterMinesPrice) {
        cookies -= betterMinesPrice;
        goldPerClick += 1;
        betterMinesPrice *= 2;
        updateDisplay();
    }
});

buyDoubleCookies.addEventListener('click', () => {
    if (gold >= doubleCookiesPrice) {
        gold -= doubleCookiesPrice;
        cookiesPerClick *= 2;
        doubleCookiesPrice *= 2;
        updateDisplay();
    }
});

updateDisplay();