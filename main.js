const timeNode = document.querySelector('.time');

setInterval(() => {
    const time = new Date();
    timeNode.textContent = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
}, 1000);