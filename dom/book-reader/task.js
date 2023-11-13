const fontSizeBtns = document.querySelectorAll(".font-size");
const bookContent = document.querySelectorAll('.book__content p');
for(let i = 0; i < fontSizeBtns.length; i++) {
    fontSizeBtns[i].addEventListener('click', () => {
        bookContent.forEach(element => {
            element.classList.add(fontSizeBtns[i].classList[1]);
            console.log(element);
        })
    })
}