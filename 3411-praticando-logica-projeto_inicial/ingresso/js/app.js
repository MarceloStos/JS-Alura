let pista = 100;
let cadeiraSuperior = 200;
let cadeiraInferior = 400;

function comprar(){
    let ingresso = document.getElementById('tipo-ingresso').value;
    let quantidade = document.getElementById('qtd').value;

    if(ingresso == 'pista'){
        comprarPista(quantidade);
    } else if(ingresso == 'inferior'){  
        comprarCadeiraInferior(quantidade);
    } else {
        comprarCadeiraSuperior(quantidade);
    }
}

function comprarPista(quantidade){

    let qtdPista = document.getElementById('qtd-pista'); 

    if((pista - quantidade) >= 0){
        pista -= quantidade;
        qtdPista.textContent = pista;
    } else {
        alert(`Não foi possivel comprar ingresso na pista. Apenas ${pista} ingresso(s) estão disponíveis`);
    }
}

function comprarCadeiraInferior(quantidade){

    let qtdInferior = document.getElementById('qtd-inferior'); 
    if((cadeiraInferior - quantidade) >= 0){
        cadeiraInferior -= quantidade;
        qtdInferior.textContent = cadeiraInferior;
    } else {
        alert(`Não foi possivel comprar ingresso na cadeira inferior. Apenas ${cadeiraInferior} ingresso(s) estão disponíveis`);
    }
}

function comprarCadeiraSuperior(quantidade){

    let qtdSuperior = document.getElementById('qtd-superior');
    if((cadeiraSuperior - quantidade) >= 0){
        cadeiraSuperior -= quantidade;
        qtdSuperior.textContent = cadeiraSuperior;
    } else {
        alert(`Não foi possivel comprar ingresso na cadeira superior. Apenas ${cadeiraSuperior} ingresso(s) estão disponíveis`);
    }
}
