let itemAnimate = () => {
    let items = document.querySelectorAll('.gallery__item');
    items.forEach(item => {
        let position = item.getBoundingClientRect().top;
        let screenPosition = window.innerHeight;

        if(position < screenPosition) {
            item.classList.add('gallery__item-animate');
        }
    });
}

window.addEventListener('scroll', itemAnimate);