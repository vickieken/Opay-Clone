// Reset code

const amountEL = document.querySelector('.amount');

const topUpEL = document.querySelector('.top-up');

const confirmBtnEL = document.querySelector('.confirm-btn');

const packagrDropDown = document.querySelector('.package-drop-down');

const packageList = document.querySelector('.package-list');

const dropDown = document.querySelector('.drop-down');

const list = document.querySelector('.list');

const selected = document.querySelector('.selected');

const selectedPack = document.querySelector('.selected-pack');

const selectedImg = document.querySelector('.selectedImg');

const selectedImgPack = document.querySelector('.selectedImg-pack');

const wrapper = document.querySelector('.wrapper');

const item = document.querySelectorAll('.item');

const packageWrapper = document.querySelector('.package-wrapper');

const packageItem = document.querySelectorAll('.package-item');

console.log(packageItem);

wrapper.addEventListener("click", ()=> {
    list.classList.toggle('show');

    topUpEL.classList.toggle('show-index');

    confirmBtnEL.classList.toggle('show-index');

    amountEL.classList.toggle('show-amount-index');
})

packageWrapper.addEventListener("click", ()=> {
    packageList.classList.toggle('show');

    confirmBtnEL.classList.toggle('show-index');

    amountEL.classList.toggle('show-amount-index');
})

item.forEach(item => {
    item.addEventListener("click", ()=> {
        list.classList.toggle('show');
    
        topUpEL.classList.toggle('show-index');
    
        confirmBtnEL.classList.toggle('show-index');
    })
})

packageItem.forEach(packageItem => {
    packageItem.addEventListener("click", ()=> {
        packageList.classList.toggle('show');
    
        confirmBtnEL.classList.toggle('show-index');
    })
    
});

list.addEventListener("click", (e)=> {
    const img = e.target.querySelector('img');
    const text = e.target.querySelector('.text');

    selectedImg.src = img.src;
    selected.innerHTML = text.innerHTML;
})

packageList.addEventListener("click", (e)=> {
    // const text = e.target.querySelector('.package-text');
    const packageImg = e.target.querySelector('.package-img');

    selectedPack.innerHTML = packageImg.innerHTML;
    selectedImgPack.scr = text.innerHTML;

    packageWrapper.innerHTML = packageItem.innerHTML;
})

// list.addEventListener("click", (e)=> {
//     const img = e.target.querySelector('img');
//     const text = e.target.querySelector('.text');

//     selectedImg.src = img.src;
//     selected.innerHTML = text.innerHTML;
// })