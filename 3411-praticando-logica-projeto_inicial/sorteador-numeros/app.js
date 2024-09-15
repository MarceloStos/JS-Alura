function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let minimo = parseInt(document.getElementById('de').value);
    let maximo = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
        
        numero = obterNumeroAleatorio(minimo, maximo);
        if (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(minimo, maximo);
            i--;
        }else{
            sorteados.push(numero);
        }
    }
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
 
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {

    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function limparCampos() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
}
function reiniciar() {
    limparCampos();
    alterarStatusBotao();
}