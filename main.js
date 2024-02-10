const timeNode = document.querySelector('.time');

const modal = document.querySelector('#modal')
const modalBtn = document.querySelector('#modal-btn')

const modalContent = document.querySelector('.modal-pages');
const modalPages = document.querySelectorAll('.modal-page');

const modalClose = document.querySelector('.modal-close')
const modalPrevious = document.querySelector('.modal-previous')
const modalNext = document.querySelector('.modal-next')

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
    }, 150);
})

modalNext.addEventListener('click', () => {
    if (modalPage<modalPages.length-1) modalPage++;
    if (modalPage>0) modalPrevious.style.display = 'block';
    if (modalPage===modalPages.length-1) modalNext.textContent = 'submit';

    modalContent.style.transform = `translateX(-${modalPage*modalPageWidth}%)`
})

modalPrevious.addEventListener('click', () => {
    if (modalPage>0) modalPage--;
    if (modalPage===0) modalPrevious.style.display = 'none';
    if (modalPage<modalPages.length-1) modalNext.textContent = 'next';
    modalContent.style.transform = `translateX(-${modalPage*modalPageWidth}%)`
})