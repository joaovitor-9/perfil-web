// 1. Manipulação do DOM: Tema Escuro/Claro
const btnTema = document.querySelector('#btn-tema');

// Recuperar preferência do localStorage ao carregar
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

// 2. Validação de Formulário com JavaScript
const formContato = document.querySelector('#form-contato');
const inputNome = document.querySelector('#nome');
const inputEmail = document.querySelector('#email');

formContato.addEventListener('submit', (event) => {
    event.preventDefault(); // Intercepta o envio nativo

    // Limpar mensagens de erro anteriores
    document.querySelectorAll('.mensagem-erro').forEach(el => el.remove());

    let formularioValido = true;

    // Verificar nome (mínimo 3 caracteres)
    if (inputNome.value.trim().length < 3) {
        exibirErro(inputNome, 'O nome deve ter pelo menos 3 caracteres.');
        formularioValido = false;
    }

    // Verificar formato de e-mail usando Expressão Regular
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(inputEmail.value.trim())) {
        exibirErro(inputEmail, 'Insira um formato de e-mail válido.');
        formularioValido = false;
    }

    // Sucesso
    if (formularioValido) {
        alert('Mensagem enviada com sucesso!');
        formContato.reset();
        document.querySelector('#contador-caracteres').textContent = '0/300 caracteres';
        document.querySelector('#contador-caracteres').style.color = 'inherit';
    }
});

// Função auxiliar para criar e exibir erros no DOM
function exibirErro(elementoInput, mensagem) {
    const spanErro = document.createElement('span');
    spanErro.classList.add('mensagem-erro');
    spanErro.textContent = mensagem;
    // Insere a mensagem de erro logo após o input invalidado
    elementoInput.parentNode.appendChild(spanErro);
}

// 3. Interatividade nos Cards
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        // Remove a classe 'ativo' de todos os cards
        cards.forEach(c => c.classList.remove('ativo'));
        
        // Adiciona a classe 'ativo' apenas ao card clicado
        card.classList.add('ativo');
    });
});

// 4. Contador de Caracteres no Textarea
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
        // Reseta a cor caso o usuário apague caracteres
        contadorElement.style.color = 'inherit';
        contadorElement.style.fontWeight = 'normal';
    }
});