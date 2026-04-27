const btnTema = document.querySelector('#btn-tema');

if (localStorage.getItem('tema') === 'dark') {
    document.body.classList.add('dark');
    btnTema.textContent = '☀️ Claro';
}
btnTema.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('tema', 'dark');
        btnTema.textContent = '☀️ Claro';
    } else {
        localStorage.setItem('tema', 'light');
        btnTema.textContent = '🌙 Escuro';
    }
});
const formContato = document.querySelector('#form-contato');
const inputNome = document.querySelector('#nome');
const inputEmail = document.querySelector('#email');

formContato.addEventListener('submit', (event) => {
    event.preventDefault();
    
    document.querySelectorAll('.mensagem-erro').forEach(el => el.remove());

    let formularioValido = true;
    
    if (inputNome.value.trim().length < 3) {
        exibirErro(inputNome, 'O nome deve ter pelo menos 3 caracteres.');
        formularioValido = false;
    }
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!regexEmail.test(inputEmail.value.trim())) {
        exibirErro(inputEmail, 'Insira um formato de e-mail válido.');
        formularioValido = false;
    }
    if (formularioValido) {
        alert('Mensagem enviada com sucesso!');
        formContato.reset();
        document.querySelector('#contador-caracteres').textContent = '0/300 caracteres';
        document.querySelector('#contador-caracteres').style.color = 'inherit';
    }
});
function exibirErro(elementoInput, mensagem) {
    const spanErro = document.createElement('span');
    spanErro.classList.add('mensagem-erro');
    spanErro.textContent = mensagem;
    elementoInput.parentNode.appendChild(spanErro);
}
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        cards.forEach(c => c.classList.remove('ativo'));
        card.classList.add('ativo');
    });
});
const textareaMensagem = document.querySelector('#mensagem');
const contadorElement = document.querySelector('#contador-caracteres');
const maxCaracteres = 300;

textareaMensagem.addEventListener('input', () => {
    const tamanhoAtual = textareaMensagem.value.length;
    contadorElement.textContent = `${tamanhoAtual}/${maxCaracteres} caracteres`;

    if (tamanhoAtual >= maxCaracteres) {
        contadorElement.style.color = 'red';
        contadorElement.style.fontWeight = 'bold';
    } else {
        contadorElement.style.color = 'inherit';
        contadorElement.style.fontWeight = 'normal';
    }
});
