const imagens = [
    'img/fundobatata.jpeg',
    'img/embarque-em-seco.jpg',
    'img/fundo3.avif',
    'img/fundosalmao.jpeg',
    'img/fundo1.jpg'
];

let index = 0;
const section = document.getElementById('background-carousel');

function trocarImagem() {
    const bg = section.querySelector('::before');
    section.style.setProperty('--bg-url', `url(${imagens[index]})`);
    section.style.backgroundImage = `url('${imagens[index]}')`;

    index = (index + 1) % imagens.length;
}

setInterval(trocarImagem, 5000);