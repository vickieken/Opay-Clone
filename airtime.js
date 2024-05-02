const amountEL = document.querySelector('.amount');

const choseNetworkEL = document.querySelector('.choose-network');


const networkOptEL = document.querySelector('.network-options');

const dropDown = document.querySelector('.drop-down');

const list = document.querySelector('.list');

const selected = document.querySelector('.selected');

const selectedImg = document.querySelector('.selectedImg');

const wrapper = document.querySelector('.wrapper');

const item = document.querySelectorAll('.item');

console.log(dropDown);

wrapper.addEventListener('click', ()=> {

    dropDown.classList.toggle('show');

    amountEL.classList.toggle('show-amount-index');
});

wrapper.addEventListener("click", ()=> {
    list.classList.toggle('show');
})

item.forEach(item => {
    item.addEventListener("click", ()=> {
        list.classList.toggle('show');
    })
})

list.addEventListener("click", (e)=> {
    const img = e.target.querySelector('img');
    const text = e.target.querySelector('.text');

    selectedImg.src = img.src;
    selected.innerHTML = text.innerHTML;
})