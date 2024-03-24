const amountEL = document.querySelector('.amount');

const choseNetworkEL = document.querySelector('.choose-network');


const networkOptEL = document.querySelector('.network-options');

console.log(amountEL);

choseNetworkEL.addEventListener('click', ()=> {

    networkOptEL.classList.toggle('show');

    amountEL.classList.toggle('show-data-index');
});