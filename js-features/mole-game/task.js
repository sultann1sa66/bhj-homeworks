const holes = document.getElementsByClassName('hole');
let dead = document.getElementById('dead');
let missed = document.getElementById('lost');
for(let element of holes) {
    element.addEventListener('click', () => {
        if(element.classList.contains('hole_has-mole')){
            let num = Number(dead.textContent);
            num ++;
            dead.textContent = num;
            if(dead.textContent === '10'){
                setTimeout(() => {
                    alert('You won!');
                    dead.textContent = 0;
                    missed.textContent = 0;

                }, 100);
                    
            }
        }
        if(!element.classList.contains('hole_has-mole')){
            let num = Number(missed.textContent);
            num ++;
            missed.textContent = num;
            if(missed.textContent === '5'){
                setTimeout(() => {
                    alert('You won!');
                    dead.textContent = 0;
                    missed.textContent = 0;

                }, 100);
                    
            }
        }
    })
}

    
    