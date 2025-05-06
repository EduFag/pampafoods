const imagens = [
    'img/fundobatata.jpeg',
    'https://img.freepik.com/fotos-gratis/embarque-em-seco_1398-242.jpg?t=st=1746041424~exp=1746045024~hmac=7c180ce6f969a1f31e0dedc7617c618319fd2a4fc6bca8f9fcfe0eca9d1f52b7&w=1380',
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