const reveals = document.querySelectorAll('.reveal');
    
    function revealActive(element) {
        const viewportHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        if(elementTop < viewportHeight) {
            element.classList.add('reveal_active');
        }
    }
    window.addEventListener('scroll', () => {
        for(let i = 0; i < reveals.length; i++) {
          revealActive(reveals[i]);
        }
    });
    