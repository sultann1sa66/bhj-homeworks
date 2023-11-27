let timer = document.getElementById('timer');
let date = new Date;
console.log(date);

let intervalId = setInterval(() => {
    let num = Number(timer.textContent);
    num--;
    timer.textContent = num;
    if(num < 0) {
        timer.textContent = 0;
        alert('Вы победили в конкурсе!');
        clearInterval(intervalId);
    }
}, 1000);
