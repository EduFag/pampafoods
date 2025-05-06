document.getElementById('formContato').addEventListener('submit', function(e) {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    fetch('/includes/email.php', {
        method: 'POST',
        body: data
    })
    .then(response => response.text())
    .then(resposta => {
        document.getElementById('mensagemResposta').innerText = 'Mensagem enviada com sucesso!';
    })
    .catch(() => {
        document.getElementById('mensagemResposta').innerText = 'Erro ao enviar.';
    });
});