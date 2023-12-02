const hasTooltips =  document.querySelectorAll('.has-tooltip');
const body = document.querySelector('body');

for(let hasTooltip of hasTooltips) {
    hasTooltip.addEventListener('click', (e) => {
        e.preventDefault();
        let tooltip = document.createElement('div');
        tooltip.classList.add('tooltip');
        tooltip.setAttribute("style", "left: 0; top: 0");
        tooltip.textContent = hasTooltip.getAttribute('title');
        hasTooltip.insertAdjacentElement('afterend', tooltip);
        tooltip.classList.add('tooltip_active');
       
    })
    
}