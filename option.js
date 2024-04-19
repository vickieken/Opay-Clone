
const dropDown = document.querySelector('.drop-down');

const list = document.querySelector('.list');

const selected = document.querySelector('.selected');

const selectedImg = document.querySelector('.selectedImg');

console.log(selectedImg);

dropDown.addEventListener("click", ()=> {
    list.classList.toggle('show');
})

list.addEventListener("click", (e)=> {
    const img = e.target.querySelector('img');
    const text = e.target.querySelector('.text');

    selectedImg.src = img.src;
    selected.innerHTML = text.innerHTML;
})