const rotatorCase = document.querySelectorAll('.rotator__case');
const bookContent = document.querySelector('div.card');

function getIndex(){
    for(let i = 0; i < rotatorCase.length; i++) {
        rotatorCase[i].classList.remove('rotator__case_active');
    }
    let index = Math.floor(Math.random() * rotatorCase.length);
       rotatorCase[index].classList.add('rotator__case_active');
       rotatorCase[index].style.color =  rotatorCase[index].dataset.color;
       
}
setInterval(() => getIndex(), 1000);
