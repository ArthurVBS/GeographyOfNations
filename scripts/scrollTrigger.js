const target = document.querySelectorAll('[data-animation]');
const animationClass = 'animate';

function animateScroll()
{
    const windowTop = window.pageYOffset + ((window.innerHeight * 5) / 6);
    target.forEach(function(element)
    {
        windowTop > element.offsetTop ? element.classList.add(animationClass) : element.classList.remove(animationClass)
    });
};

animateScroll();

window.addEventListener('scroll', () =>{
    animateScroll();
});
