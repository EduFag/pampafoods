document.querySelectorAll('.carrossel-container').forEach(container => {
    const carrossel = container.querySelector('.carrossel');
    const prevBtn = container.querySelector('.prev');
    const nextBtn = container.querySelector('.next');
    const totalSlides = carrossel.children.length;
    let index = 0;
    let intervalo;

    function mostrarSlide(i) {
        index = (i + totalSlides) % totalSlides;
        carrossel.style.transform = `translateX(-${index * 100}%)`;
    }

    function iniciar() {
        intervalo = setInterval(() => mostrarSlide(index + 1), 4000);
    }

    function parar() {
        clearInterval(intervalo);
    }

    nextBtn.addEventListener('click', () => mostrarSlide(index + 1));
    prevBtn.addEventListener('click', () => mostrarSlide(index - 1));
    container.addEventListener('mouseenter', parar);
    container.addEventListener('mouseleave', iniciar);

    iniciar(); // inicia o carrossel individual
});