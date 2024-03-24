const amountEL = document.querySelector('.amount');

const choseNetworkEL = document.querySelector('.choose-network');


const networkOptEL = document.querySelector('.network-options');

const meterNoEL = document.querySelector('.meter-number');

console.log(meterNoEL);

choseNetworkEL.addEventListener('click', ()=> {

    networkOptEL.classList.toggle('show');

    amountEL.classList.toggle('show-betting-index');

    meterNoEL.classList.toggle('show');
});