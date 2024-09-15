alert('Bem vindo ao jogo do numero secreto!');
let numeroSecreto = 29;
let chute;
let tentativas = 1;
while (chute != numeroSecreto) {
    chute = prompt('Escolha um numero entre 1 e 30');

    if (chute == numeroSecreto){
        alert(`Voce descobriu o numero secreto ${numeroSecreto} em ${tentativas} tentativas`);
    }else{
        if (chute > numeroSecreto){
            alert(`O numero secreto eh menor que ${chute}`);
        }else{
            alert(`O numero secreto eh maior que ${chute}`);
        }
        tentativas++;
    }
}