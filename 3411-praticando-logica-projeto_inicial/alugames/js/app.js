
function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomejogo = gameClicado.querySelector('.dashboard__item__button');

    if(imagem.classList.contains('dashboard__item__img--rented')){
        imagem.classList.remove('dashboard__item__img--rented');
        alterarBotao(botao);
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        alterarBotao(botao);
    }
}

function alterarBotao(botao){
    if(botao.classList.contains('dashboard__item__button--return')){
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
    } else {
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
    }
}