let clickerCounter = document.getElementById('clicker__counter');
let num = 0;
const cookie = document.getElementById('cookie');

cookie.addEventListener('click', () => {
    num++;
    if(num % 2) {
        cookie.setAttribute('width', 400);
    } else {
        cookie.setAttribute('width', 200);
    }
    clickerCounter.textContent = num;
})
