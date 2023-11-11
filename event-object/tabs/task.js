const tabs = Array.from(document.querySelectorAll('.tab'));
const tabContent = Array.from(document.querySelectorAll('.tab__content'))
console.log(tabContent);
for(let i = 0; i < tabs.length; i++){
    tabs[i].addEventListener('click', () => {
        if(!tabs[i].classList.contains('tab_active')){
            tabs[i].classList.add('tab_active');
            tabContent[i].classList.add('tab__content_active');
            for(let j = 0; j < tabs.length; j++){
                if(i !== j) {
                    tabs[j].classList.remove('tab_active');
                    tabContent[j].classList.remove('tab__content_active');
                }
            }
        }
        
    })
}