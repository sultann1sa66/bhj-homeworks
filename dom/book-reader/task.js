const fontSizeBtns = document.querySelectorAll(".font-size");
const bookContent = document.querySelector('.book__content');

for(let i = 0; i < fontSizeBtns.length; i++) {
    fontSizeBtns[i].addEventListener('click', (e) => {
        for(let j = 0; j < fontSizeBtns.length; j++) {
            fontSizeBtns[j].classList.remove('font-size_active');
            bookContent.classList.remove(fontSizeBtns[j].classList[1]);
        }
bookContent.classList.add(fontSizeBtns[i].classList[1]);
fontSizeBtns[i].classList.add('font-size_active');
        
        e.preventDefault();
    })
}
