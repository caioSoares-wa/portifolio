
// pegando as informações do html pelo id
const form = document.getElementById("contato-formulario");
const inputNome = document.getElementById("nome");
const inputEmail = document.getElementById("email");
const inputMensagem = document.getElementById("mensagem");

// pegando as informações do html dos erros pelo id
const erroNome = document.getElementById("erro-Nome");
const erroEmail = document.getElementById("erro-Email");
const erroMensagem = document.getElementById("erro-Mensagem");
const mensagemSucesso = document.getElementById("mensagem-sucesso");

//adicionando  um evento e passando como parametro o 'submit' do botão e um arrow function
form.addEventListener('submit', function(e){
    //evita envio padrão
    e.preventDefault();

    //limpa as mensagens de erro
    LimparErros();


    let formValido = true;

    //verifica se o nome n está vazio se sim, muda a variavel formValido para falso
    if(inputNome.value.trim() === ''){
        erroNome.textContent = "Por favor preencha seu nome.";
        formValido = false;
    }


    //regex do email, para verificar se o formato digitado é valido (peguei no google)
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ ;

    // verifica se não esta vazio e testa o formato de acordo com o regex
    if(inputEmail.value.trim() === ''){
        erroEmail.textContent = 'Informe um e-mail.';
        formValido=false;
    }else if(!regexEmail.test(inputEmail.value.trim())){
        erroEmail.textContent="Insira um email válido.";
        formValido = false;
    }

    //verifica se a mensagem está vazia
    if(inputMensagem.value.trim() === '' ){
        erroMensagem.textContent = 'Insira alguma mensagem.';
        formValido = false;
    }

    //se tudo certo lança mensagem enviada e reseta o form
    if(formValido){
        mensagemSucesso.textContent= 'Mensagem Enviada.';
        form.reset();

        setTimeout(() => {
            mensagemSucesso.textContent='';
        }, 4000)
    }

} )


// função de limpar os erros
function LimparErros(){
    erroNome.textContent = '';
    erroEmail.textContent = '';
    erroMensagem.textContent = '';

    mensagemSucesso.textContent = '';
}