const nicknameEditEl = document.querySelector('.nickname-edit');

const emailEditEl = document.querySelector('.email-edit');

const nicknameContainer = document.querySelector('.nickname-container');

const emailContainer = document.querySelector('.email-container');

const cancelBtnNickName = document.querySelector('.cancel-btn-nickname');

const cancelBtnEmail = document.querySelector('.cancel-btn-email');

// To open the edit nickname
nicknameEditEl.addEventListener('click', ()=> {
    nicknameContainer.style.top = 0 + "%";
    nicknameContainer.style.minHeight = 100 + "vh";
});

// To open the edit email
emailEditEl.addEventListener('click', ()=> {
    emailContainer.style.top = 0 + "%";
    emailContainer.style.minHeight = 100 + "vh";
});

// To close the edit nickname
cancelBtnNickName.addEventListener('click', ()=> {
    nicknameContainer.style.top = -100 + "%";
    nicknameContainer.style.minHeight = 100 + "vh";
});

// To close the edit email edit
cancelBtnEmail.addEventListener('click', ()=> {
    emailContainer.style.top = -100 + "%";
    emailContainer.style.minHeight = 100 + "vh";
});