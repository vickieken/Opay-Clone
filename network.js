const choseNetworkEL = document.querySelector('.choose-network');

const chosePackageEL = document.querySelector('.choose-package');

const body = document.querySelector('body');

const networkOptEL = document.querySelector('.network-options');

const packageOptEL = document.querySelector('.package-options');


const amountEL = document.querySelector('.amount');

const topUpEL = document.querySelector('.top-up');

const confirmBtnEL = document.querySelector('.confirm-btn');

console.log(confirmBtnEL);

 choseNetworkEL.addEventListener('click', ()=> {
     confirmBtnEL.classList.toggle('show-index');

    topUpEL.classList.toggle('show-index');

     networkOptEL.classList.toggle('show');

     amountEL.classList.toggle('show-index');
});

 chosePackageEL.addEventListener('click', ()=> {
     packageOptEL.classList.toggle('show');

     confirmBtnEL.classList.toggle('show-index');
});
