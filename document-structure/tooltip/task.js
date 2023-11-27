const hasTooltips =  document.querySelectorAll('.has-tooltip');
for(let hasTooltip of hasTooltips) {
    hasTooltip.addEventListener('click', (e) => {
        e.preventDefault();
        const tooltip = hasTooltip.insertAdjacentHTML('afterEnd', '<div></div>');
        tooltip.textContent = hasTooltip.getAttribute('title');
        tooltip.classList.add('tooltip');
        console.log(tooltip);
        if(tooltip.classList.contains('tooltip_active')){
            tooltip.classList.remove('tooltip_active');
        } else {
            tooltip.classList.add('tooltip_active');
        }
        
    })
    
}