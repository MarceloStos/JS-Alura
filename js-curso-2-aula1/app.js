let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        let palavraTentativa = tentativa > 1? 'tentativa' : 'tentativas';
        let mensagem = `Você descobriu o número secreto com ${tentativa} ${palavraTentativa}`;
        exibirTextoNaTela('h1', 'Acertou!!');
        exibirTextoNaTela('p', mensagem);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else if (chute > numeroSecreto){
        exibirTextoNaTela('p', 'O número secreto é menor');
        tentativa++;
        limparCampo();
    }else{
        exibirTextoNaTela('p', 'O número secreto é maior');
        tentativa++;
        limparCampo();
    }
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 a 10');
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return numeroEscolhido = gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativa = 1;
    limparCampo();
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}