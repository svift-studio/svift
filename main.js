const timeNode = document.querySelector('.time');

setInterval(() => {
    const time = new Date();
    timeNode.textContent = formatTime(time);
}, 1000)

function formatTime(time) {
    return time.getHours().toString().padStart(2, '0') + ':' +
    time.getMinutes().toString().padStart(2, '0') + ':' +
    time.getSeconds().toString().padStart(2, '0');
}