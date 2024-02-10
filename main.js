const timeNode = document.querySelector('.time');

const modal = document.querySelector('#modal')
const modalBtn = document.querySelector('#modal-btn')

const modalContent = document.querySelector('.modal-pages');
const modalPages = document.querySelectorAll('.modal-page');

const modalClose = document.querySelector('.modal-close');
const modalPrevious = document.querySelector('.modal-previous');
const modalNext = document.querySelector('.modal-next');

const modalInputWebsite = document.querySelector('#modal-input-website');
const modalInputEmail = document.querySelector('#modal-input-email');

const error = document.querySelector('.error');

let modalPageWidth = 100/modalPages.length;
let modalPage = 0;

setInterval(() => {
    const time = new Date();
    timeNode.textContent = formatTime(time);
}, 1000)

function formatTime(time) {
    return time.getHours().toString().padStart(2, '0') + ':' +
    time.getMinutes().toString().padStart(2, '0') + ':' +
    time.getSeconds().toString().padStart(2, '0');
}

modalBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
    
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 150);
})

modalClose.addEventListener('click', () => {
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.display = 'none';
        error.style.display = 'none';
        error.textContent = '';
    }, 150);
})

modalNext.addEventListener('click', () => {
    if (inputCheck(modalPages[modalPage].querySelector('input'))) return;
    error.style.display = 'none';
    error.textContent = '';

    if (modalPage<modalPages.length-1) modalPage++;
    if (modalPage>0) modalPrevious.style.display = 'block';
    if (modalPage===modalPages.length-1) modalNext.textContent = 'submit';
    modalContent.style.transform = `translateX(-${modalPage*modalPageWidth}%)`
})

modalPrevious.addEventListener('click', () => {
    error.style.display = 'none';
    error.textContent = '';
    if (modalPage>0) modalPage--;
    if (modalPage===0) modalPrevious.style.display = 'none';
    if (modalPage<modalPages.length-1) modalNext.textContent = 'next';
    modalContent.style.transform = `translateX(-${modalPage*modalPageWidth}%)`
})


function inputCheck(page) {
    console.log(page.className)
    switch (page.className) {
        case 'website':
            if (page.value.length<3 || !page.value.includes('.')) {
                error.textContent = 'Enter your Website!';
                error.style.display = 'flex';
                return true;
            }
            break;
        case 'email':
            if (page.value.length<3 || !page.value.includes('.') || !page.value.includes('@')) {
                error.textContent = 'Enter your Email!';
                error.style.display = 'flex';
                return true;
            }    
            break;
    }
}