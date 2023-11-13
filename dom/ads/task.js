const rotatorCase = document.querySelectorAll('.rotator__case');
const para = document.querySelector('div.card p');
console.log(rotatorCase);

function getIndex(){
    let index = Math.floor(Math.random() * rotatorCase.length);
    if(!rotatorCase[index].classList.contains('.rotator__case_active')) {
       rotatorCase[index].classList.add('.rotator__case_active');
    }
    
}
getIndex();