const dropDownBtn = document.querySelector('.dropdown__value');
const dropDownList = document.querySelector('.dropdown__list');
const listArray = Array.from(document.getElementsByClassName('dropdown__link'));

dropDownBtn.addEventListener('click', () => {
    dropDownList.classList.add('dropdown__list_active');
})
for(let i = 0; i < listArray.length; i++){
    listArray[i].addEventListener('click', () => {
        console.log(listArray[i].textContent);
        dropDownBtn.textContent = listArray[i].textContent;
    })
}
 



