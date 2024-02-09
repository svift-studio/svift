const timeNode = document.querySelector('.time');

setInterval(() => {
    const time = new Date();
    timeNode.textContent = formatTime(time);
}, 1000)

function formatTime(time) {
    let hours;
    let minutes;
    let seconds;
    if (time.getHours()>=10) {hours = `${time.getHours()}`} else 
    if (time.getHours()<10 && time.getHours>0) {hours = `0${time.getHours()}`} else
    {hours = '00'}
    if (time.getMinutes()>=10) {minutes = `${time.getMinutes()}`} else 
    if (time.getMinutes()<10 && time.getMinutes>0) {minutes = `0${time.getMinutes()}`} else
    {minutes = '00'}
    if (time.getSeconds()>=10) {seconds = `${time.getSeconds()}`} else 
    if (time.getSeconds()<10 && time.getSeconds>0) {seconds = `0${time.getSeconds()}`} else
    {seconds = '00'}
    return hours+':'+minutes+':'+seconds;
}